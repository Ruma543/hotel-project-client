import { useLoaderData } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import axios from 'axios';
import { useEffect } from 'react';
const url = 'https://i.ibb.co/7KyFJzQ/bookpage.jpg';
const BookPage = () => {
  const { user } = useAuth();
  const bookItem = useLoaderData();
  const axiosSecure = useAxiosSecure();
  console.log(bookItem);
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
  } = bookItem || {};
  console.log(user.email);
  const handleBook = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const review = form.get('review');
    const quantity = form.get('quantity');
    const email = form.get('email');
    const date = form.get('date');
    const bookUpdate = {
      customerName: name,
      review: review,
      available_rooms: available_rooms - quantity,
      email: email,
      date: date,
      room_image,
      room_name,
      price_per_night,
      room_size,
    };

    axiosSecure
      .patch(`/services/s/${_id}`, bookUpdate)
      .then(res => console.log(res.data))
      .catch(error => {
        console.error('An error occurred:', error);
      });

    console.log(bookUpdate);
    console.log(_id);

    axiosSecure
      .post('/bookings', bookUpdate)
      .then(res => console.log(res.data));
  };
  return (
    <div
      className="w-4/5 mx-auto rounded-lg"
      style={{ backgroundImage: `url(${url})`, backgroundSize: 'cover' }}
    >
      <h2 className="text-2xl text-center text-white font-semibold my-3 font-serif ">
        Room Booking Information
      </h2>
      <form
        onSubmit={handleBook}
        className="bg-black/25 px-6 rounded-b-lg text-blue-600 py-6"
      >
        {/* first name, offer */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col space-y-4">
            <label className=" text-white text-xl font-semibold text-left ">
              Customer Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              defaultValue={user?.displayName}
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className=" text-xl text-white font-semibold text-left ">
              Room Quantity
            </label>
            <input
              type="number"
              name="quantity"
              placeholder="quantity"
              defaultValue={available_rooms}
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>
        </div>
        {/* 2nd price ,size */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col space-y-4">
            <label className="text-white  text-xl font-semibold text-left ">
              Customer Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              defaultValue={user?.email}
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className=" text-white text-xl font-semibold text-left ">
              Date
            </label>
            <input
              type="date"
              name="date"
              placeholder="date"
              // defaultValue={room_size}
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>

          {/*3rd description, */}
        </div>
        <div className="flex flex-col space-y-4">
          <label className=" text-xl text-white font-semibold text-left ">
            Customer Review
          </label>
          <input
            type="text"
            name="review"
            placeholder="review"
            // defaultValue={price_per_night}
            className="w-full rounded-lg px-4 py-2 outline-0"
          />
        </div>

        {/* 4th image */}

        {/* button */}
        <div className="flex justify-center my-3">
          <input
            className="btn btn-primary lg:w-1/5 w-2/3 mx-auto"
            type="submit"
            value="Add to Book"
          />
        </div>
      </form>
    </div>
  );
};

export default BookPage;
