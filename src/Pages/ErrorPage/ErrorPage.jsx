import React from 'react';
import PageTitle from '../../Component/PageTitle/PageTitle';
import error from '../../assets/error.jpg';
import { Link } from 'react-router-dom';
const ErrorPage = () => {
  return (
    <div className="w-2/3 mx-auto lg:h-[70vh]">
      <PageTitle title="error page"></PageTitle>
      <div className="flex justify-center items-center h-full">
        <img className="h-full" src={error} alt="" />
      </div>
      <div className=" w-2/3 mx-auto flex justify-center items-center flex-col space-y-4">
        <h3 className="text-red-600 text-2xl font-serif font-semibold">
          Something Went Wrong.
        </h3>
        <Link to="/">
          <button className="px-4 py-3 text-white bg-blue-800 hover:bg-green-800">
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
