import React from 'react';
// import bannerLottie from '../../../assets/Animation - 1699349716959.json';
// import Lottie from 'react-lottie';
const Banner = () => {
  // const img1 = 'https://i.ibb.co/q7GkKPP/Banner1.jpg';
  const img2 = 'https://i.ibb.co/Dz2Fy59/review-image.jpg';
  // const img3 = 'https://i.ibb.co/GdzsZPp/banner3.jpg';
  // const img4 = 'https://i.ibb.co/cgLF8Zn/banner4.jpg';
  return (
    <div
      className=" lg:h-[80vh] h-[70vh]  "
      style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover' }}
    >
      <div className="bg-black/50 h-full grid lg:grid-cols-2 grid-cols-1">
        <div className=" flex flex-col justify-center items-center space-y-5">
          <h3 className="lg:text-6xl text-4xl text-center  text-white mt-20">
            The Perfect Base For You
          </h3>
          <p className="text-white text-center">
            Escape to our enchanting hotel, where relaxation meets
            sophistication. Indulge in impeccable service, unwind in style, and
            create memories to cherish. Book your dream getaway today
          </p>
          <div className="flex gap-5">
            <button className="lg:bg-orange-900/50 bg-blue-700 text-sm hover:bg-orange-700 text-white lg:text-xl font-bold font-serif px-4 py-3 ">
              Take a Tour
            </button>
            <button className="lg:bg-orange-900/50  hover:bg-orange-700 bg-blue-700 text-white lg:text-xl text-sm font-bold font-serif px-4 py-3">
              {' '}
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center">
          {/* <Lottie
            className="w-20 h-20"
            animationData={bannerLottie}
            loop={false}
            autoplay={true}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Banner;
