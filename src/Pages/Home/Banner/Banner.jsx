import React, { useEffect } from 'react';
// import Lottie from 'react-lottie';
// import bannerLottie from '../../../assets/Animation - 1699349716959.json';
// import Lottie from 'react-lottie';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
  // const img1 = 'https://i.ibb.co/q7GkKPP/Banner1.jpg';
  const img2 = 'https://i.ibb.co/Dz2Fy59/review-image.jpg';
  const img3 = 'https://i.ibb.co/GdzsZPp/banner3.jpg';
  // const img4 = 'https://i.ibb.co/cgLF8Zn/banner4.jpg';
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className=" lg:h-[80vh] h-[70vh]  "
      style={{ backgroundImage: `url(${img2})`, backgroundSize: 'cover' }}
    >
      <div className="bg-black/50 h-full grid lg:grid-cols-2 grid-cols-1">
        <div className=" flex flex-col justify-center items-center space-y-5">
          <div>
            <h3
              data-aos="fade-up-left"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="lg:text-4xl text-white text-4xl text-center mt-20 font-serif font-semibold"
            >
              The Perfect Base For You
            </h3>
            <h3
              data-aos="fade-up-right"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="text-white text-center"
            >
              Escape to our enchanting hotel, where relaxation meets
              sophistication. Indulge in impeccable service, unwind in style,
              and create memories to cherish. Book your dream getaway today
            </h3>
          </div>

          <div className="flex gap-5">
            <button
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="lg:bg-orange-900/50 bg-blue-700 text-sm hover:bg-orange-700 text-white lg:text-xl font-bold font-serif px-4 py-3 "
            >
              Take a Tour
            </button>
            <button
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="lg:bg-orange-900/50  hover:bg-orange-700 bg-blue-700 text-white lg:text-xl text-sm font-bold font-serif px-4 py-3"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center mt40"></div>
      </div>
    </div>
  );
};

export default Banner;
