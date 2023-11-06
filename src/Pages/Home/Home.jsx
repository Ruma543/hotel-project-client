import React from 'react';
import UserReview from '../../Component/UserReview/UserReview';
import Marquee from 'react-fast-marquee';
const Home = () => {
  return (
    <div>
      <Marquee className="flex flex-row">
        <UserReview></UserReview>
      </Marquee>
    </div>
  );
};

export default Home;
