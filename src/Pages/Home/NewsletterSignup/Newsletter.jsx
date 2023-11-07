import React from 'react';
const img3 = 'https://i.ibb.co/GdzsZPp/banner3.jpg';
const Newsletter = () => {
  return (
    <div className="w-11/12 mx-auto my-6">
      <div
        className="h-[60vh] w-2/3 mx-auto rounded-lg"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: 'cover',
        }}
      >
        <div className="w-full h-full bg-black/50 p-10 flex flex-col justify-center items-center space-y-5 rounded-lg">
          <h3 className="text-3xl text-white font-bold font-serif">
            Subscribe to get up to 70% offer!!!!{' '}
          </h3>
          <input
            className="w-full px-5 py-3 outline-0 rounded-lg"
            type=" text"
            placeholder="Enter your email... "
          />
          <input
            type="submit"
            value="Subscribe"
            className="text-white text-xl font-semibold font-serif px-4 py-3 bg-orange-800/70 hover:bg-orange-700  "
          />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
