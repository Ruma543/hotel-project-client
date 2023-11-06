import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hook/useAuth';

const Registration = () => {
  const { userCreate, profileUpdate } = useAuth();
  const navigate = useNavigate();
  const handleRegistration = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const email = form.get('email');
    const image = form.get('image');
    const password = form.get('password');
    console.log(name, email, password, image);

    if (password.length < 6) {
      Swal.fire({
        icon: 'error',
        title: 'Password must have 6 character!',
        showConfirmButton: true,
      });
      return;
    } else if (!/[A-Z]/.test(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Password should have at least one uppercase!',
        showConfirmButton: true,
      });
      return;
    } else if (!/(?=.*[@#$%^&+=!])/.test(password)) {
      Swal.fire({
        icon: 'error',
        title: 'Password should have at least one  special character!',
        showConfirmButton: true,
      });
      return;
    }
    userCreate(email, password)
      .then(result => {
        profileUpdate(name, image)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'User Registration successfully',
              showConfirmButton: true,
            });

            navigate('/');
          })
          .catch(error => {
            Swal.fire({
              icon: 'error',
              title: 'User information is missing!',
              showConfirmButton: true,
            });
          });
      })
      .then(error => console.log(error));
  };
  return (
    <div>
      <div>
        <h3 className="text-2xl font-serif  text-center font-semibold mt-1 mb-3">
          Please Register
        </h3>
        <form
          onSubmit={handleRegistration}
          className="lg:w-1/3 w-11/12 md:w-3/5 mx-auto bg-blue-200 px-5 py-3 rounded-lg "
        >
          <label className="label">
            <span className="text-blue-700 font-semibold text-xl">
              User Name
            </span>
          </label>
          <input
            type="text"
            className="input block w-full outline-none border-0"
            name="name"
            placeholder="Enter your name.."
            required
          />
          <label className="label">
            <span className="text-blue-700 font-semibold text-xl">
              User Email
            </span>
          </label>
          <input
            type="email"
            className="input block w-full outline-none border-0"
            name="email"
            placeholder="Enter your email.."
            required
          />
          <label className="label">
            <span className="text-blue-700 font-semibold text-xl">
              User Image URL
            </span>
          </label>
          <input
            type="text"
            className="input block w-full outline-none border-0"
            name="image"
            placeholder="Enter your Image URL.."
            required
          />
          <label className="label">
            <span className="text-blue-700 font-semibold text-xl">
              User Password
            </span>
          </label>
          <input
            type="password"
            className="input block w-full outline-none border-0"
            name="password"
            placeholder="Enter your password.."
            required
          />

          <button className="py-2 btn w-full my-2 text-blue-600">
            Registration
          </button>
        </form>
        <p className="py-4 text-center">
          Already have Account? Please{' '}
          <Link className="text-black underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Registration;
