import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../Hook/useAuth';
import useAxiosSecure from '../../Hook/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { FcPrevious, FcNext } from 'react-icons/fc';
import PageTitle from '../../Component/PageTitle/PageTitle';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// import animation from '../../assets/Animation - 1699349716959.json';
// import Lottie from 'react-lottie';

const Rooms = () => {
  const [price, setPrice] = useState('');
  const [page, setPage] = useState(1);
  const axiosSecure = useAxiosSecure();
  // console.log(price);
  const getRooms = async () => {
    // const sortOrder = price === 'asc' ? 'asc' : 'desc';
    const res = await axiosSecure.get(
      `/services?sortField=price_per_night&sortOrder=${price}&page=${page}&limit=${limit}`
    );
    return res;
  };
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['data', price, page],
    queryFn: getRooms,
  });
  if (isLoading) {
    <div>
      <progress className="progress w-56"></progress>
      {/* <Lottie
        className="w-20 h-20"
        animationData={animation}
        loop={false}
        autoplay={true}
      /> */}
    </div>;
  }

  const limit = 6;
  const totalPage = Math.ceil(parseInt(data?.data?.total) / limit);
  console.log(totalPage);
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
      console.log(page);
    }
  };
  const handleNext = () => {
    if (page < totalPage) {
      setPage(page + 1);
      console.log(page);
    }
  };
  return (
    <div className="w-11/12 mx-auto mb-6 mt-20 ">
      <PageTitle title="rooms page"></PageTitle>
      <div className="flex lg:justify-between  flex-col">
        <h3 className="lg:text-3xl text-lg font-semibold text-center">
          Our Available Room:{data?.data?.total}
        </h3>

        {/* <div>
          <Tabs>
            <TabList onChange={e => setPrice(e.target.value)}>
              <Tab>Default</Tab>
              <Tab>
                <option value="asc">Low to high</option>
              </Tab>
              <Tab>
                <option value="desc"> High to low</option>
              </Tab>
            </TabList>

            <TabPanel>
              <option value="asc">Low to high</option>
            </TabPanel>
            <TabPanel>
              <option value="desc"> High to low</option>
            </TabPanel>
          </Tabs>
        </div> */}

        <div className="text-right py-4 flex gap-3 justify-center ">
          <h3 className="lg:text-2xl text-sm font-semibold text-center">
            Choose Your Room With Price Range
          </h3>
          <select
            className="bg-blue-500 px-4 py-2 rounded-lg text-white outline-0"
            onChange={e => setPrice(e.target.value)}
            name=""
            id=""
          >
            <option className="px-4 py-2 rounded-lg text-white" value="">
              Select One
            </option>
            <option className="px-4 py-2 rounded-lg text-white" value="asc">
              Low to high
            </option>
            <option className="px-4 py-2 rounded-lg text-white" value="desc">
              {' '}
              High to low
            </option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div>
          <progress className="progress w-56"></progress>
          {/* <Lottie
            className="w-20 h-20"
            animationData={animation}
            loop={false}
            autoplay={true}
          /> */}
        </div>
      ) : (
        <div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {data?.data?.result.map(room => (
              <div
                key={room._id}
                className="flex flex-col items-center justify-center w-full max-w-sm mx-auto my-4"
              >
                <div
                  className="w-full h-64 bg-gray-100 bg-center bg-cover rounded-lg shadow-md"
                  style={{
                    backgroundImage: `url(${room.room_image})`,
                  }}
                ></div>

                <div className="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                  <h3 className="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">
                    {room.room_name}
                  </h3>
                  {/* <h3>{room.rating}</h3> */}
                  <div className="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                    <span className="font-bold text-gray-800 dark:text-gray-200">
                      Price: ${room.price_per_night}
                    </span>
                    <Link to={`/details/${room._id}`}>
                      <button className="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none">
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button onClick={handlePrev}>
              <span>
                <FcPrevious></FcPrevious>{' '}
              </span>
            </button>
            {Array(totalPage)
              .fill(0)
              .map((item, index) => {
                const pageNumber = index + 1;
                return (
                  <button
                    key={pageNumber}
                    onClick={() => setPage(pageNumber)}
                    className={`${
                      pageNumber === page
                        ? 'btn btn-circle btn-primary '
                        : ' btn btn-circle btn-ghost'
                    }`}
                  >
                    {pageNumber}
                  </button>
                );
              })}
            <button onClick={handleNext}>
              <span>
                <FcNext></FcNext>
              </span>
            </button>
          </div>
        </div>
      )}
      {/* {isLoading ? (
        <div>
          <progress className="progress w-56"></progress>
        </div>
      ) : (
       
      )} */}
    </div>
  );
};

export default Rooms;
