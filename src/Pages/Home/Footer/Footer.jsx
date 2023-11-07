import React from 'react';

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="px-7 py-7 grid lg:grid-cols-2 grid-cols-1 ">
        <div>
          <h3 className="text-white">CONTACT</h3>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div>
            <h3>information</h3>
          </div>
          <div>
            <h3>help</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
