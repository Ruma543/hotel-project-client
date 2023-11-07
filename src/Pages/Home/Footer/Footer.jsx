import React from 'react';
// import { FaGoogle, FaFacebookMessenger } from 'react-icons/fa';
// import {
//   AiOutlineTwitter,
//   AiOutlineHome,
//   AiOutlinePhone,
// } from 'react-icons/ai';
// import { HiOutlineLocationMarker } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="px-7 py-7 grid lg:grid-cols-2 grid-cols-1 ">
        <div>
          <h3 className="text-white">CONTACT</h3>
          <h3 className="text-white">
            {/* <AiOutlineHome></AiOutlineHome>
            <AiOutlinePhone></AiOutlinePhone>
            <HiOutlineLocationMarker></HiOutlineLocationMarker> */}
          </h3>
        </div>
        <div className="grid text-white lg:grid-cols-2 grid-cols-1">
          <div>
            <h3>information</h3>
          </div>
          <div>
            <h3>help</h3>
            <h3 className="flex gap-4">
              {/* <FaGoogle></FaGoogle>
              <FaFacebookMessenger></FaFacebookMessenger>
              <AiOutlineTwitter></AiOutlineTwitter> */}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
