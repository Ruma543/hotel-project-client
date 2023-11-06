import axios from 'axios';
import React from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';

const AddRoom = () => {
  const axiosSecure = useAxiosSecure();
  const handleAddRoom = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const offer = form.get('offer');
    const price = form.get('price');
    const description = form.get('description');
    const size = form.get('size');
    const image = form.get('image');
    const newRoom = { name, description, price, offer, size, image };
    console.log(newRoom);
    axiosSecure
      .post('/services', newRoom, {
        headers: {
          'content-type': 'application/json',
        },
      })
      .then(res => console.log(res.data));
  };
  return (
    <div className="w-11/12 mx-auto ">
      <h2 className="text-2xl text-center font-semibold my-3 font-serif">
        Room Information Input
      </h2>
      <form
        onSubmit={handleAddRoom}
        className="bg-orange-100 px-6 text-blue-600 py-6"
      >
        {/* first name, offer */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col space-y-4">
            <label className=" text-xl font-semibold text-left ">
              Room Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Room Name.."
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className=" text-xl font-semibold text-left ">
              Special Offer
            </label>
            <input
              type="text"
              name="offer"
              placeholder="Special offer"
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>
        </div>
        {/* 2nd price ,size */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col space-y-4">
            <label className=" text-xl font-semibold text-left ">
              Price per night
            </label>
            <input
              type="number"
              name="price"
              placeholder="Price Per Night"
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className=" text-xl font-semibold text-left ">
              Room Size
            </label>
            <input
              type="text"
              name="size"
              placeholder="Room Size.."
              className="w-full rounded-lg px-4 py-2 outline-0"
            />
          </div>

          {/*3rd description, */}
        </div>
        <div className="flex flex-col space-y-4 ">
          <label className=" text-xl font-semibold text-left ">
            Room Description
          </label>
          <input
            type="text"
            name="description"
            placeholder="Room Description.."
            className="w-full rounded-lg px-4 py-2 outline-0"
          />
        </div>

        {/* 4th image */}
        <div className="flex flex-col space-y-4 ">
          <label className=" text-xl font-semibold text-left ">
            Room Image
          </label>
          <input
            type="text"
            name="image"
            placeholder="Photo URL"
            className="w-full rounded-lg px-4 py-2 outline-0"
          />
        </div>
        {/* button */}
        <div className="flex justify-center my-3">
          <input
            className="btn btn-primary lg:w-1/5 w-2/3 mx-auto"
            type="submit"
            value="Add New Room"
          />
        </div>
      </form>
    </div>
  );
};

export default AddRoom;
