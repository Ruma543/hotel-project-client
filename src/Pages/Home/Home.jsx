import React from 'react';
import UserReview from '../../Component/UserReview/UserReview';
import Marquee from 'react-fast-marquee';
import Banner from './Banner/Banner';
import FeaturedRoom from './FeaturedRooms/FeaturedRoom';
const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <FeaturedRoom></FeaturedRoom>
      {/* <Marquee className="flex flex-row">
        <UserReview></UserReview>
      </Marquee> */}
    </div>
  );
};

export default Home;
