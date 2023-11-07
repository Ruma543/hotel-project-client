import React from 'react';
import UserReview from '../../Component/UserReview/UserReview';
import Marquee from 'react-fast-marquee';
import Banner from './Banner/Banner';
import FeaturedRoom from './FeaturedRooms/FeaturedRoom';
import PageTitle from '../../Component/PageTitle/PageTitle';
import Newsletter from './NewsletterSignup/Newsletter';
import Footer from './Footer/Footer';
const Home = () => {
  return (
    <div>
      <PageTitle title="home page"></PageTitle>
      <Banner></Banner>
      <FeaturedRoom></FeaturedRoom>
      <UserReview></UserReview>
      <Newsletter></Newsletter>
      <Footer></Footer>
      {/* <Marquee className="flex flex-row"> */}

      {/* </Marquee> */}
    </div>
  );
};

export default Home;
