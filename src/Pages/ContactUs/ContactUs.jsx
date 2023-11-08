import React from 'react';
const event3 = 'https://i.ibb.co/nL2cpB0/18.jpg';
const ContactUs = () => {
  return (
    <div
      className="mt-20 lg:h-[80vh] w-3/5 mx-auto"
      style={{
        backgroundImage: `url(${event3})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="bg-black/70 h-full px-10 grid gap-5 grid-cols-2">
        <div></div>
        <div>
          <div className="flex flex-col space-y-4">
            <label className=" text-xl text-white font-semibold text-left ">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Room Name.."
              className="w-full  px-4 py-2 outline-0"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className=" text-xl text-white font-semibold text-left ">
              Email
            </label>
            <input
              type="Email"
              name="name"
              placeholder="Enter Your email.."
              className="w-full  px-4 py-2 outline-0"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className=" text-xl text-white font-semibold text-left ">
              Phone No.
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Your phone no"
              className="w-full  px-4 py-2 outline-0"
            />
          </div>
          <div className="flex flex-col space-y-4">
            <label className=" text-xl text-white font-semibold text-left ">
              How can i help you?
            </label>
            <textarea
              className="w-full  px-4 py-2 outline-0"
              placeholder="enter your message"
              name=""
              id=""
              cols="20"
              rows="4"
            ></textarea>
          </div>
          <input
            type="submit"
            value="Submit"
            className="px-5 py-3 bg-orange-500 text-white text-center my-4"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
