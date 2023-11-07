import React from 'react';

const Banner = () => {
  const img1 = 'https://i.ibb.co/q7GkKPP/Banner1.jpg';
  const img2 = 'https://i.ibb.co/Dz2Fy59/review-image.jpg';
  const img3 = 'https://i.ibb.co/GdzsZPp/banner3.jpg';
  const img4 = 'https://i.ibb.co/cgLF8Zn/banner4.jpg';
  return (
    <div
      className=" lg:h-[80vh]   "
      style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover' }}
    >
      <div className="bg-black/50 lg:h-full grid grid-cols-2">
        <div className=" flex flex-col justify-center items-center space-y-5">
          <h3 className="text-6xl text-center text-white">
            The Perfect Base For You
          </h3>
          <div className="flex gap-5">
            <button className="bg-orange-900/50 hover:bg-orange-700 text-white text-xl font-bold font-serif px-4 py-3">
              Take a Tour
            </button>
            <button className="bg-orange-900/50  hover:bg-orange-700 text-white text-xl font-bold font-serif px-4 py-3">
              {' '}
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {/* <div
            className="w-40 h-40 "
            style={{ backgroundImage: `url(${img4})`, backgroundSize: 'cover' }}
          ></div> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
