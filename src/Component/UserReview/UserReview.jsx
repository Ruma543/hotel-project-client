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
      {/* <h3>{reviews.length}</h3>
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
      </div> */}

      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          {/* <img
            src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
          /> */}
          <h3 className="w-full text-center h-[70vh]">user review</h3>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;
//
