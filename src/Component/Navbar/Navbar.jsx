import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import Swal from 'sweetalert2';

const Navbar = () => {
  const { user, userLogOut } = useAuth();
  const handleLogOut = () => {
    userLogOut()
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'User Logout successfully',
          showConfirmButton: true,
        });

        return;
      })
      .catch(error => {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong',
          showConfirmButton: true,
        });
        return;
      });
  };
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isActive ? 'text-red-500 font-semibold' : isPending ? 'pending' : ''
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/rooms"
          className={({ isActive, isPending }) =>
            isActive ? 'text-red-500 font-semibold' : isPending ? 'pending' : ''
          }
        >
          Rooms
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myBooking"
          className={({ isActive, isPending }) =>
            isActive ? 'text-red-500 font-semibold' : isPending ? 'pending' : ''
          }
        >
          My Booking
        </NavLink>
      </li>
    </>
  );
  const [fix, setFix] = useState(false);
  useEffect(() => {
    const setFixed = () => {
      if (window.scrollY > 202) {
        setFix(true);
      } else {
        setFix(false);
      }
    };
    window.addEventListener('scroll', setFixed);
    return () => {
      window.removeEventListener('scroll', setFixed);
    };
  }, []);
  return (
    <div className="">
      <div
        className={
          fix
            ? 'transition duration-150 ease-in-out h-20 bg-blue-300 flex   '
            : ' h-20 bg-blue-600 flex  '
        }
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Hotel</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="dropdown dropdown-end">
              <div className="flex items-center gap-5">
                <div>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="lg:w-10 w-7  rounded-full ">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                  <p className="text-xs w-full ">{user.displayName}</p>
                </div>
                <button
                  onClick={handleLogOut}
                  className="lg:px-4 lg:py-3 py-1 px-2 bg-red-600 text-white"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <Link to="/login">
              <button className="lg:px-4 lg:py-3 px-2 py-1 bg-blue-600 text-white mr-5">
                login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
