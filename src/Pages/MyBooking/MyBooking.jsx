import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { useEffect } from 'react';
import useAuth from '../../Hook/useAuth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
// import Moment from 'react-moment';
import moment from 'moment';
import PageTitle from '../../Component/PageTitle/PageTitle';

const MyBooking = () => {
  const { user } = useAuth();
  const { loading } = useAuth();
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  // console.log(bookings);
  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {
    axiosSecure
      .get(url, { withCredentials: true })
      .then(res => setBookings(res.data));
  }, [url, axiosSecure]);
  console.log(bookings);
  const handleDelete = _id => {
    const booking = bookings.find(item => item._id === _id);

    if (!booking) {
      return;
    }
    const bookedDate = moment(booking.date, 'MM/DD/YYYY');
    const cancelationDeadline = moment(bookedDate).subtract(1, 'days');
    console.log(bookedDate);
    console.log(cancelationDeadline);
    const currentDate = moment();
    console.log(currentDate);

    if (currentDate.isBefore(cancelationDeadline)) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(result => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/bookings/${_id}`).then(res => {
            console.log(res.data);
            if (res?.data?.deletedCount > 0) {
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              });

              const remaining = bookings.filter(item => item._id !== _id);
              setBookings(remaining);
            }
          });
        }
      });
    } else {
      Swal.fire({
        title: 'Cannot Cancel',
        text: 'You can only cancel bookings before 1 day of the booked date.',
        icon: 'error',
      });
    }
  };
  return (
    <div className="w-11/12 mx-auto mt-20">
      <PageTitle title="my booking page"></PageTitle>
      {loading ? (
        <progress className="progress w-56"></progress>
      ) : (
        <div>
          <h3 className="text-center font-semibold font-serif text-2xl lg:text-3xl my-7">
            {' '}
            Your Booking Count : {bookings.length}
          </h3>
          <div className="space-y-5">
            {bookings.map(item => (
              <div
                className="grid lg:grid-cols-2 grid-cols-1 gap-5 lg:w-2/3 w-full mx-auto rounded-lg shadow-lg p-6"
                key={item._id}
              >
                <img className="h-56 w-full" src={item.room_image} alt="" />
                <div className="grid grid-cols-2">
                  <div className="space-y-5 flex flex-col">
                    <h3 className="font-bold text-xm lg:text-xl text-left">
                      Room: {item.room_name}
                    </h3>
                    <h3 className="font-bold text-xm lg:text-xl text-left">
                      Customer Name: {item.customerName}
                    </h3>
                    <h3 className="font-bold text-xm lg:text-xl text-left">
                      Booking Date: {item.date}
                    </h3>
                  </div>
                  <div className="flex gap-5 flex-col">
                    <Link to={`/update/${item._id}`}>
                      <button className="bg-green-500 text-white px-4 py-3 hover:bg-green-700">
                        Update Date
                      </button>
                    </Link>
                    <Link to={`/review/${item._id}`}>
                      <button className="bg-blue-500 text-white px-4 py-3 hover:bg-blue-700">
                        Share Review
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id, item)}
                      className="bg-red-500 text-white px-4 py-3 w-2/3 hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyBooking;
