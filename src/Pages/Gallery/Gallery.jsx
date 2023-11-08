import React from 'react';

const room1 = 'https://i.ibb.co/y4RzGNH/4.jpg';
const room2 = 'https://i.ibb.co/wWC2gvW/3.jpg';
const room3 = 'https://i.ibb.co/C9q2b9J/6.jpg';
const room4 = 'https://i.ibb.co/RSP5syz/8.jpg';
const room5 = 'https://i.ibb.co/W6JDqv4/9.jpg';
const room6 = 'https://i.ibb.co/8XyxzCW/15.jpg';
const room7 = 'https://i.ibb.co/3MW7Wmp/16.jpg';
const Gallery = () => {
  return (
    <div className="mt-20 w-4/5 mx-auto">
      <h3 className="text-center font-semibold lg:text-4xl text-2xl">
        Photo Gallery for Our Rooms{' '}
      </h3>

      <div className="grid grid-cols-10 grid-row-10 gap-4 my-6">
        <div className="col-span-3 grid grid-row-10 gap-3">
          <img className="row-span-5" src={room1} alt="" />
          <img className="row-span-5" src={room5} alt="" />
        </div>
        <div className="col-span-4 ">
          <img className=" row-span-6 mb-2 " src={room2} alt="" />
          <div className=" grid grid-cols-2 ">
            <img src={room6} alt="" />
            <img src={room7} alt="" />
          </div>
        </div>
        <div className="col-span-3 grid-row-10 grid gap-3">
          <img className="row-span-5" src={room3} alt="" />
          <img className="row-span-5" src={room4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
