import React from 'react';

const room1 = 'https://i.ibb.co/Jt-d-31gq/5.jpg';
const Gallery = () => {
  return (
    <div className="mt-20">
      <h3 className="text-center font-semibold lg:text-4xl text-2xl">
        Photo Gallery for Our Rooms{' '}
      </h3>

      <div>
        <img src={room1} alt="" />
      </div>
    </div>
  );
};

export default Gallery;
