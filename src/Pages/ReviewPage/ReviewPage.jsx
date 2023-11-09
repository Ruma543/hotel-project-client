import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import PageTitle from '../../Component/PageTitle/PageTitle';
import Swal from 'sweetalert2';

// const url = 'https://i.ibb.co/Dz2Fy59/review-image.jpg';
const ReviewPage = () => {
  const reviews = useLoaderData();
  const { loading } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { room_name, room_image, customerName, email, roomId } = reviews || {};
  console.log(reviews);
  const handleAddReview = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const rating = form.get('rating');
    const review = form.get('review');
    const feedback = {
      name,
      rating,
      review,
      room_name,
      roomId,
      date: new Date(),
    };
    console.log(feedback);

    axiosSecure.post('/userReview', feedback).then(res => {
      console.log(res.data);
      if (res?.data?.insertedId) {
        Swal.fire({
          icon: 'success',
          title: 'Your review Post Successfully',
          showConfirmButton: true,
        });

        navigate('/myBooking');
      }
    });
  };
  return (
    <div className="mt-20">
      <PageTitle title="review page"></PageTitle>
      {loading ? (
        <p>loading....</p>
      ) : (
        <div
          className=" lg:w-3/4 w-full md:w-11/12 mx-auto h-[70vh]"
          style={{
            backgroundImage: `url(${room_image})`,
            backgroundSize: 'cover',
          }}
        >
          <h2 className="text-2xl  bg-black/25 text-white text-center font-semibold  font-serif py-5">
            {room_name}
          </h2>
          <form
            onSubmit={handleAddReview}
            className=" px-6 text-blue-600 py-6 bg-black/25"
          >
            {/* first name, offer */}
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
              <div className="flex flex-col space-y-4">
                <label className=" text-xl text-white font-semibold text-left ">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Room Name.."
                  defaultValue={customerName}
                  className="w-full rounded-lg px-4 py-2 outline-0"
                />
              </div>
              <div className="flex flex-col space-y-4">
                <label className="text-white text-xl font-semibold text-left ">
                  Room Rating
                </label>
                <input
                  type="number"
                  name="rating"
                  placeholder="rating..."
                  className="w-full rounded-lg px-4 py-2 outline-0"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <label className=" text-white text-xl font-semibold text-left ">
                Review
              </label>
              <textarea
                className="w-full px-4 py-2 rounded-lg outline-0 "
                name="review"
                id=""
                cols="5"
                rows="5"
              ></textarea>
            </div>
            {/* button */}
            <div className="flex justify-center my-3">
              <input
                className="btn btn-primary lg:w-1/5 w-2/3 mx-auto"
                type="submit"
                value="Post Review"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
