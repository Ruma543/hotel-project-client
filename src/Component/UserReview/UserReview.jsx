import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
const UserReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto bg-green-300 p-6">
      <h3>{reviews.length}</h3>
      <div className="grid grid-cols-3 gap-5">
        {reviews.map(item => (
          <div key={item._id} className="flex">
            <div className="flex flex-col p-5 rounded-lg bg-white">
              <img
                className="w-20 h-20 rounded-full mx-auto "
                src={item.image}
                alt=""
              />
              <h3 className="text-center font-semibold">{item.userName}</h3>
              <h3 className="text-center">{item.review}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReview;
