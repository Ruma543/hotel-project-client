import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { useEffect } from 'react';
import useAuth from '../../Hook/useAuth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
// import Moment from 'react-moment';
import moment from 'moment';

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
  // console.log(bookings.data.date);
  // <Moment diff="2015-04-19" unit="days">
  //   1976-04-19T12:59-0500
  // </Moment>;
  // const now = moment();
  // const formattedDate = now.format('YYYY-MM-DD'); // Format the date as 'YYYY-MM-DD'
  // console.log(formattedDate);
  // const isDeletable = bookings => {
  //   const bookingDate = moment(booking.date);
  //   const oneDayBeforeBookingDate = bookingDate.clone().subtract(1, 'days');
  //   const currentDate = moment();

  //   return currentDate.isBefore(oneDayBeforeBookingDate);
  // };

  // const isDeletable = bookings => {
  //   const oneDayBeforeBookingDate = new Date(bookings.date);
  //   oneDayBeforeBookingDate.setDate(oneDayBeforeBookingDate.getDate() - 1);

  //   const currentDate = new Date();
  //   return currentDate < oneDayBeforeBookingDate;
  // };

  const handleDelete = _id => {
    console.log(_id);
    console.log(_id.date);
    console.log(bookings);
    var now = moment(new Date());
    var end = moment('2023-11-8');
    var duration = moment.duration(now.diff(end));
    var days = duration.asDays();
    console.log(days);
    console.log(end);
    console.log(now);
    // ............................................................
    // if (!isDeletable(bookings)) {
    //   // Show a message indicating that it's too late to delete
    //   Swal.fire({
    //     title: 'Cannot Delete',
    //     text: 'It is too late to delete this booking.',
    //     icon: 'error',
    //   });
    //   return;
    // }

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
  };
  return (
    <div className="w-11/12 mx-auto">
      {loading ? (
        <p>loading.....</p>
      ) : (
        <div>
          <h3> Your Booking:{bookings.length}</h3>
          <div className="space-y-5">
            {bookings.map(item => (
              <div className="grid grid-cols-2 " key={item._id}>
                <img className="h-56" src={item.room_image} alt="" />
                <div>
                  <h3>Room: {item.room_name}</h3>
                  <h3>Customer Name {item.customerName}</h3>
                  <h3>Booking Date: {item.date}</h3>
                  <div>
                    <Link to={`/update/${item._id}`}>
                      <button className="btn btn-primary">Update Date</button>
                    </Link>
                    <Link to={`/review/${item._id}`}>
                      <button className="btn btn-primary">Review</button>
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id, item)}
                      // disabled={!isDeletable(item)}
                      className="btn btn-error"
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
