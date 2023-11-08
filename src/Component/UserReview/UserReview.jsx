import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';

const img1 =
  'https://i.ibb.co/D7sBRP2/manuel-moreno-DGa0-LQ0y-DPc-unsplash.jpg';
// const img2 =
//   'https://i.ibb.co/yndFV54/sasha-kaunas-x-Ea-Aoiz-NFV8-unsplash.jpg';
// const img3 =
//   'https://i.ibb.co/yndFV54/sasha-kaunas-x-Ea-Aoiz-NFV8-unsplash.jpg';
const UserReview = () => {
  // const [reviews, setReviews] = useState([]);
  // useEffect(() => {
  //   fetch('https://hotel-project-server.vercel.app/reviews')
  //     .then(res => res.json())
  //     .then(data => setReviews(data));
  // }, []);
  return (
    <div className="w-11/12 mx-auto ">
      <h3 className="lg:text-4xl  text-2xl font-semibold font-serif pt-7  pb-4 text-center">
        Customer Reviews
      </h3>
      <h2 className="text-sm text-center text-gray-700 pb-6">
        We believe our service and Quality
      </h2>
      <div
        className="carousel w-full"
        style={{
          backgroundImage: `url(${img1})`,
          backgroundSize: 'cover',
        }}
      >
        <div
          id="slide1"
          className="carousel-item relative w-full lg:h-[70vh]  "
        >
          <div className="w-4/5 mx-auto grid  lg:grid-cols-3 grid-cols-1 gap-5  items-center mb-20 mt-6">
            <div className="py-5 px-6 flex-col flex justify-center rounded-lg   items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/dgC9gDL/user-3.png"
                alt=""
              />
              <h3 className="font-semibold text-blue-600 text-xl mb-3">
                Rumana Amin
              </h3>
              <h3 className="text-blue-600">Rating: 5</h3>
              <h3 className="text-gray-500 h-15">
                I had an amazing experience at your hotel! The room was clean
                and spacious, and the staff was incredibly friendly and
                accommodating.
              </h3>
            </div>
            <div className="py-5 px-6 flex-col flex justify-center rounded-lg   items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/pfP4hgb/user1.jpg"
                alt=""
              />
              <h3 className="font-semibold text-blue-600 text-xl mb-3">
                Farhana Jahan
              </h3>
              <h3 className="text-blue-600">Rating: 4</h3>
              <h3 className="text-gray-500 h-15">
                The food at the hotel restaurant was delicious, and I loved the
                variety of options they offered. I'll definitely be coming back
                in the future. 5 stars!
              </h3>
            </div>
            <div className="py-5  px-6 flex-col  flex rounded-lg    justify-center items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/njym0mZ/user2.jpg"
                alt=""
              />
              <h3 className="font-semibold text-blue-600 text-xl mb-3">
                Ibrahim Hasan
              </h3>
              <h3 className="text-blue-600">Rating: 5</h3>
              <h3 className="text-gray-500 h-15">
                I can't say enough good things about our stay at your hotel. The
                room was spotless, and the view from our balcony was stunning.
              </h3>
            </div>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="w-4/5 mx-auto grid  lg:grid-cols-3 grid-cols-1 gap-5  items-center">
            <div className="py-5 px-6 flex-col flex justify-center rounded-lg  h-70 items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/W2x588S/user4.png"
                alt=""
              />
              <h3 className="font-semibold text-blue-600 text-xl">
                Sharah Amin
              </h3>
              <h3 className="text-blue-600">Rating: 4.5</h3>
              <h3 className="text-gray-500">
                The location was perfect, and we could easily explore the nearby
                attractions. The hotel's restaurant had a wonderful menu.
              </h3>
            </div>
            <div className="py-5 px-6 flex-col flex justify-center rounded-lg   items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/2gBxDGg/user6.jpg"
                alt=""
              />
              <h3 className="font-semibold text-blue-600 text-xl mb-3">
                Istiak Haulader
              </h3>
              <h3 className="text-blue-600">Rating: 5</h3>
              <h3 className="text-gray-500 h-15">
                The staff was attentive and provided excellent service. The
                hotel's location made it easy for us to explore the city.
              </h3>
            </div>
            <div className="py-5  px-6 flex-col flex rounded-lg    justify-center items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/W22Wdhv/user5.png"
                alt=""
              />
              <h3 className="font-semibold text-blue-600 text-xl mb-3">
                Sonia Jannat
              </h3>
              <h3 className="text-blue-600">Rating: 5</h3>
              <h3 className="text-gray-500 h-15">
                I had a wonderful time at your hotel. The room was cozy, and I
                enjoyed the beautiful sunset from my window every evening.
              </h3>
            </div>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="w-4/5 mx-auto grid  lg:grid-cols-3 grid-cols-1  gap-5  items-center">
            <div className="py-5 px-6 flex-col flex justify-center rounded-lg  h-70 items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/njym0mZ/user2.jpg"
                alt=""
              />
              <h3 className="font-semibold text-blue-600 text-xl mb-3">
                Rafiq Hasan
              </h3>
              <h3 className="text-blue-600">Rating: 4</h3>
              <h3 className="text-gray-500 h-15">
                The hotel's proximity to the shore made it easy for us to take
                long walks on the beach. The hotel's restaurant was fresh and
                delicious.
              </h3>
            </div>
            <div className="py-5 px-6 flex-col flex justify-center rounded-lg   items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/dgC9gDL/user-3.png"
                alt=""
              />
              <h3 className="font-semibold text-blue-600 text-xl mb-3">
                Dipty Chowdury
              </h3>
              <h3 className="text-blue-600">Rating: 5</h3>
              <h3 className="text-gray-500 h-15">
                I had a memorable stay at your hotel. The room was comfortable
                and had a balcony with a lovely view of the garden.
              </h3>
            </div>
            <div className="py-5  px-6 flex-col h-70 flex rounded-lg    justify-center items-center bg-white">
              <img
                className="w-20 h-20 rounded-full"
                src="https://i.ibb.co/pfP4hgb/user1.jpg"
                alt=""
              />
              <h3 className="font-semibold text-blue-600 text-xl mb-3">
                Lubana Jahan
              </h3>
              <h3 className="text-blue-600">Rating: 4</h3>
              <h3 className="text-gray-500 h-15">
                We were delighted by the culinary offerings at the hotel's
                restaurant. The chef's special menu wasvery delicious.
              </h3>
            </div>
          </div>
          <div className="absolute flex justify-center transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle">
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
