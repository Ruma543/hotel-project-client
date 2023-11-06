import React from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { useEffect } from 'react';
import useAuth from '../../Hook/useAuth';

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
                  <button className="btn btn-primary">Update</button>
                  <button className="btn btn-error">Delete</button>
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
