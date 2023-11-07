import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BookPage from '../../Component/BookPage/BookPage';
import useAuth from '../../Hook/useAuth';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import PageTitle from '../../Component/PageTitle/PageTitle';

const RoomDetails = () => {
  const roomDetails = useLoaderData();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [userReview, setUserReview] = useState([]);
  const {
    _id,
    roomId,
    room_name,
    room_image,
    room_description,
    price_per_night,
    room_size,
    special_offer,
    available_rooms,
  } = roomDetails || {};
  // console.log(Object.keys(roomDetails).join(','));

  const url = '/userReview';
  useEffect(() => {
    axiosSecure.get(url, { withCredentials: true }).then(res => {
      const reviews = res.data || [];
      const filteredReviews = reviews.filter(item => item.roomId == _id);
      setUserReview(filteredReviews);
    });
  }, [url, axiosSecure, roomId]);
  console.log(roomId);
  // console.log(filterReview);
  console.log(userReview);
  console.log(roomDetails);
  return (
    <div className="w-11/12 mx-auto">
      <PageTitle title="room details page"></PageTitle>
      <img
        className="w-11/12 mx-auto max-h-[70vh] rounded-b-lg"
        src={room_image}
        alt=""
      />
      {/* <h3>{userReview.review}</h3> */}
      <h3> {userReview?.length}</h3>
      {userReview.length > 0 ? (
        userReview?.map(item => (
          <div key={item._id}>
            <h3>{item.review}</h3>
            <h3>{item.date}</h3>
          </div>
        ))
      ) : (
        <p>no review....</p>
      )}
      <div className=" w-2/5 mx-auto my-5">
        <Marquee>
          <h3 className="text-blue-600 font-semibold font-serif ">
            Offer!!!{special_offer}
          </h3>
        </Marquee>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="p-6 rounded-lg shadow-lg bg-blue-300 space-y-4">
          <h3 className="text-3xl font-semibold text-green-600">{room_name}</h3>
          <h3 className="text-blue-600 font-semibold">{room_description}</h3>
        </div>
        <div className="p-6 rounded-lg shadow-lg bg-blue-300 space-y-4 ">
          <div className="my-5">
            <h3 className="text-blue-600 font-semibold">
              Room size:{room_size}
            </h3>
            <h3 className="text-blue-600 font-semibold">
              Available Room:{available_rooms}
            </h3>
            <h3 className="text-blue-600 font-semibold">
              {' '}
              Price:{price_per_night}
            </h3>
          </div>
          {available_rooms !== 0 ? (
            <Link to={`/bookPage/${_id}`}>
              <button className="bg-blue-600 px-4 py-3 text-white hover:bg-green-600">
                Book NoW
              </button>
            </Link>
          ) : (
            <>
              <button className="bg-blue-600 px-4 py-3 text-white hover:bg-green-600">
                Unavailable
              </button>
              {/* <BookPage></BookPage> */}
            </>
          )}
        </div>
      </div>
      {/* {user?.email && <BookPage />} */}
    </div>
  );
};

export default RoomDetails;
