import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { useEffect } from 'react';
import useAuth from '../../Hook/useAuth';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

const MyBooking = () => {
  const { user } = useAuth();
  const { loading } = useAuth();
  const [bookings, setBookings] = useState([]);
  const axiosSecure = useAxiosSecure();

  console.log(bookings);
  const url = `/bookings?email=${user?.email}`;
  useEffect(() => {
    axiosSecure
      .get(url, { withCredentials: true })
      .then(res => setBookings(res.data));
  }, [url, axiosSecure]);

  const handleDelete = _id => {
    console.log(_id);
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
                      onClick={() => handleDelete(item._id)}
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
