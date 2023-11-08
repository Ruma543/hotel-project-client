import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hook/useAxiosSecure';
import { Link } from 'react-router-dom';

const FeaturedRoom = () => {
  const axiosSecure = useAxiosSecure();
  const [featuredRooms, setFeaturedRooms] = useState();
  const url = '/services';
  useEffect(() => {
    axiosSecure.get(url).then(res => {
      console.log(res.data);
      const first6Rooms = res.data.result.slice(0, 6);
      setFeaturedRooms(first6Rooms);
      //  setFeaturedRooms(res.data);
    });
  }, [url, axiosSecure]);
  console.log(featuredRooms);
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="lg:text-4xl text-2xl font-serif font-semibold text-center py-6">
        Our Featured Rooms
      </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-5">
        {featuredRooms?.map(item => (
          <div
            data-aos="flip-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            // className="text-white text-center"
            key={item._id}
            className="relative p-5 rounded-lg shadow-lg"
          >
            <img className="h-56 w-full" src={item.room_image} alt="" />
            <div className="absolute top-1/3 flex items-center justify-center bg-blue-300 w-20 h-20 rounded-full hover:bg-blue-400">
              <Link to={`/details/${item._id}`}>
                {' '}
                <button className="text-blue-600 font-bold font-serif">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedRoom;
