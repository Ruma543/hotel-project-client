import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';

const img1 =
  'https://i.ibb.co/D7sBRP2/manuel-moreno-DGa0-LQ0y-DPc-unsplash.jpg';
const img2 =
  'https://i.ibb.co/yndFV54/sasha-kaunas-x-Ea-Aoiz-NFV8-unsplash.jpg';
const img3 =
  'https://i.ibb.co/yndFV54/sasha-kaunas-x-Ea-Aoiz-NFV8-unsplash.jpg';
const UserReview = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('https://hotel-project-server.vercel.app/reviews')
      .then(res => res.json())
      .then(data => setReviews(data));
  }, []);
  return (
    <div className="w-11/12 mx-auto bg-green-300 ">
      <div
        className="carousel w-full"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
        }}
      >
        <div id="slide1" className="carousel-item relative w-full h-[70vh]  ">
          <div className="w-4/5 mx-auto grid  grid-cols-3  gap-5  items-center">
            <div className="py-5 px-6 flex-col flex justify-center rounded-lg  h-70 items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/dgC9gDL/user-3.png"
                alt=""
              />
              <h3>Rumana Amin</h3>
              <h3>
                I had an amazing experience at your hotel! The room was clean
                and spacious, and the staff was incredibly friendly and
                accommodating. The view from my window was breathtaking.
              </h3>
            </div>
            <div className="py-5 px-6 flex-col flex justify-center rounded-lg  h-70 items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/pfP4hgb/user1.jpg"
                alt=""
              />
              <h3>Farhana Jahan</h3>
              <h3>
                The food at the hotel restaurant was delicious, and I loved the
                variety of options they offered. I'll definitely be coming back
                in the future. 5 stars!
              </h3>
            </div>
            <div className="py-5  px-6 flex-col h-70 flex rounded-lg    justify-center items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/njym0mZ/user2.jpg"
                alt=""
              />
              <h3>Ibrahim Hasan</h3>
              <h3>
                I can't say enough good things about our stay at your hotel. The
                room was spotless, and the view from our balcony was stunning.
                The staff went above and beyond to make our stay memorable.
              </h3>
            </div>
          </div>
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
          <div className="w-4/5 mx-auto grid  grid-cols-3  gap-5  items-center">
            <div className="py-5 px-6 flex-col flex justify-center rounded-lg  h-70 items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/dgC9gDL/user-3.png"
                alt=""
              />
              <h3>Rumana Amin</h3>
              <h3>
                I had an amazing experience at your hotel! The room was clean
                and spacious, and the staff was incredibly friendly and
                accommodating. The view from my window was breathtaking.
              </h3>
            </div>
            <div className="py-5 px-6 flex-col flex justify-center rounded-lg  h-70 items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/pfP4hgb/user1.jpg"
                alt=""
              />
              <h3>Farhana Jahan</h3>
              <h3>
                The food at the hotel restaurant was delicious, and I loved the
                variety of options they offered. I'll definitely be coming back
                in the future. 5 stars!
              </h3>
            </div>
            <div className="py-5  px-6 flex-col h-70 flex rounded-lg    justify-center items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/njym0mZ/user2.jpg"
                alt=""
              />
              <h3>Ibrahim Hasan</h3>
              <h3>
                I can't say enough good things about our stay at your hotel. The
                room was spotless, and the view from our balcony was stunning.
                The staff went above and beyond to make our stay memorable.
              </h3>
            </div>
          </div>
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
          <div className="w-4/5 mx-auto grid  grid-cols-3  gap-5  items-center">
            <div className="py-5 px-6 flex-col flex justify-center rounded-lg  h-70 items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/dgC9gDL/user-3.png"
                alt=""
              />
              <h3>Rumana Amin</h3>
              <h3>
                I had an amazing experience at your hotel! The room was clean
                and spacious, and the staff was incredibly friendly and
                accommodating. The view from my window was breathtaking.
              </h3>
            </div>
            <div className="py-5 px-6 flex-col flex justify-center rounded-lg  h-70 items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/pfP4hgb/user1.jpg"
                alt=""
              />
              <h3>Farhana Jahan</h3>
              <h3>
                The food at the hotel restaurant was delicious, and I loved the
                variety of options they offered. I'll definitely be coming back
                in the future. 5 stars!
              </h3>
            </div>
            <div className="py-5  px-6 flex-col h-70 flex rounded-lg    justify-center items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/njym0mZ/user2.jpg"
                alt=""
              />
              <h3>Ibrahim Hasan</h3>
              <h3>
                I can't say enough good things about our stay at your hotel. The
                room was spotless, and the view from our balcony was stunning.
                The staff went above and beyond to make our stay memorable.
              </h3>
            </div>
          </div>
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
          {/* <img
            src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          /> */}
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
