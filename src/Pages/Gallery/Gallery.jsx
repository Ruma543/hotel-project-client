import React from 'react';
import PageTitle from '../../Component/PageTitle/PageTitle';

const room1 = 'https://i.ibb.co/y4RzGNH/4.jpg';
const room2 = 'https://i.ibb.co/wWC2gvW/3.jpg';
const room3 = 'https://i.ibb.co/C9q2b9J/6.jpg';
const room4 = 'https://i.ibb.co/RSP5syz/8.jpg';
const room5 = 'https://i.ibb.co/W6JDqv4/9.jpg';
const room6 = 'https://i.ibb.co/8XyxzCW/15.jpg';
const room7 = 'https://i.ibb.co/3MW7Wmp/16.jpg';
const event1 = 'https://i.ibb.co/G3HvBD2/event2.jpg';
const event2 = 'https://i.ibb.co/wrPkFQq/event3.jpg';
const event3 = 'https://i.ibb.co/hDPzxL7/event-3.jpg';
const Gallery = () => {
  return (
    <div className="mt-20 lg:w-4/5 md:w-11/12 w-full mx-auto">
      <PageTitle title="gallery"></PageTitle>
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

      <div>
        <h3 className="text-center font-semibold lg:text-4xl text-2xl my-7">
          Some events gallery That we are organized
        </h3>
        <div className="grid lg:grid-cols-2 gap-4 md:grid-cols-2 grid-cols-1 lg:w-3/4 md:w-full w-full mx-auto rounded-lg my-6 shadow-lg p-7 items-center">
          <div>
            <img className="h-56" src={event1} alt="" />
          </div>
          <div>
            <h3 className="lg:text-3xl text-2xl font-bold my-4">
              Elegance in Every Detail
            </h3>
            <h3 className="my-4 text-xm">
              Discover the epitome of sophistication and efficiency at our
              hotel. Whether it's an intimate boardroom gathering or a grand
              conference, our meticulously organized meeting spaces are designed
              to impress. Immerse yourself in an atmosphere of elegance where
              every detail, from state-of-the-art technology to exquisite
              catering, is seamlessly tailored to ensure your event's success.
            </h3>
          </div>
        </div>
        <div className="grid lg:grid-cols-2  gap-4grid-cols-1 lg:w-3/4 w-full mx-auto rounded-lg my-6 shadow-lg p-7 items-center md:grid-cols-2">
          <div>
            <h3 className="lg:text-3xl text-2xl font-bold my-4">
              Sizzle & Smoke Fiesta
            </h3>
            <h3 className="my-4 ">
              Join us for the ultimate BBQ party at our hotel. Get ready to
              savor the mouthwatering flavors of grilled delights in a vibrant
              outdoor setting. Our talented chefs will whip up a delicious array
              of BBQ classics, while you unwind with your friends and family,
              creating unforgettable moments by the fire. The "Sizzle & Smoke
              Fiesta" promises a perfect blend of fun, food, and relaxation,
              making it an event you won't want to miss.
            </h3>
          </div>
          <div>
            <img className="h-56" src={event2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
