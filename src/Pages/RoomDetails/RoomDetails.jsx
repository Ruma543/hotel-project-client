import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Marquee from 'react-fast-marquee';
import BookPage from '../../Component/BookPage/BookPage';
import useAuth from '../../Hook/useAuth';

const RoomDetails = () => {
  const roomDetails = useLoaderData();
  const { user } = useAuth();
  const {
    _id,
    room_id,
    room_name,
    room_image,
    room_description,
    price_per_night,
    room_size,
    special_offer,
    available_rooms,
  } = roomDetails || {};
  // console.log(Object.keys(roomDetails).join(','));
  // const handleBook = e => {
  //   console.log(_id);
  //   const form = new FormData(e.currentTarget);
  //   const date = form.get('date');
  //   console.log(date);
  // };
  console.log(available_rooms);
  return (
    <div className="w-11/12 mx-auto">
      <img
        className="w-11/12 mx-auto max-h-[70vh] rounded-b-lg"
        src={room_image}
        alt=""
      />
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
