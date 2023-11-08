import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import PageTitle from '../../Component/PageTitle/PageTitle';
import Swal from 'sweetalert2';

// const url = 'https://i.ibb.co/5Wv48dg/updateimage.jpg';
const UpdateDate = () => {
  const updateDate = useLoaderData();
  const { loading } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { room_name, room_image, customerName, _id } = updateDate || {};
  const handleUpdateBookingDate = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const date = form.get('date');
    const updateDate = { name, date };
    console.log(updateDate);

    axiosSecure
      .put(`/bookings/s/${_id}`, updateDate)
      .then(res => {
        console.log(res.data);
        if (res?.data?.modifiedCount > 0) {
          Swal.fire({
            icon: 'success',
            title: 'Booking Date update successfully',
            showConfirmButton: true,
          });
          navigate('/myBooking');
        }
      })
      .catch(error => {
        console.error('An error occurred:', error);
        Swal.fire({
          icon: 'error',
          title: 'Something wrong',
          showConfirmButton: true,
        });
      });
  };

  return (
    <div>
      <PageTitle title="Update Date page"></PageTitle>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div
          className=" w-3/4 mx-auto h-[70vh]"
          style={{
            backgroundImage: `url(${room_image})`,
            backgroundSize: 'cover',
          }}
        >
          <h2 className="text-2xl bg-black/25 text-white text-center font-semibold  font-serif py-5">
            Update Date of Booking :{room_name}
          </h2>
          <form
            onSubmit={handleUpdateBookingDate}
            className=" px-6 text-blue-600 py-6 h-full bg-black/25"
          >
            {/* first name, offer */}
            <div className="grid  grid-cols-1 gap-4">
              <div className="flex flex-col space-y-4 w-2/3 mx-auto">
                <label className="text-white text-xl font-semibold text-left ">
                  Customer Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Customer Name.."
                  defaultValue={customerName}
                  className="w-full rounded-lg px-4 py-2 outline-0"
                />
              </div>
            </div>
            <div className="flex flex-col space-y-4 w-2/3 mx-auto">
              <label className=" text-white text-xl font-semibold text-left ">
                Booking Date
              </label>
              <DatePicker
                name="date"
                selected={startDate}
                onChange={date => setStartDate(date)}
                minDate={new Date()}
                className="w-full rounded-lg px-4 py-2 outline-0"
              />
            </div>
            {/* button */}
            <div className="flex justify-center my-3">
              <input
                className="btn btn-primary lg:w-1/5 w-2/3 mx-auto"
                type="submit"
                value="Update Booking Date"
              />
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default UpdateDate;
