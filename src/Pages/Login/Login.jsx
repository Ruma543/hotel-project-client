import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import Swal from 'sweetalert2';
import GoogleLogin from './GoogleLogin';
import PageTitle from '../../Component/PageTitle/PageTitle';

const Login = () => {
  const { userLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogUser = e => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    console.log(email, password);
    userLogin(email, password)
      .then(result => {
        console.log(result.user);
        e.target.reset();
        Swal.fire({
          icon: 'success',
          title: 'Login successfully',
          showConfirmButton: true,
        });
        navigate(location.state ? location.state : '/');
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: 'error',
          title: 'Please provide valid email & password',
          showConfirmButton: true,
        });
        return;
      });
  };

  return (
    <div className="mt-20">
      <PageTitle title="login page"></PageTitle>
      <div>
        <h3 className="text-2xl font-serif text-center font-semibold mt-10 mb-3">
          Please Login
        </h3>
        <form
          onSubmit={handleLogUser}
          className="lg:w-1/3 w-11/12 md:w-3/5 mx-auto bg-orange-200 px-5 py-7 rounded-lg "
        >
          <label className="label">
            <span className="text-black font-semibold text-xl">User Email</span>
          </label>
          <input
            type="email"
            className="input block w-full outline-none border-0"
            name="email"
            placeholder="Enter your email.."
            required
          />
          <label className="label">
            <span className="text-black font-semibold text-xl">
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
          <label className="label">
            <a href="" className="text-blue-700">
              Forget Password?
            </a>
          </label>
          <button className="btn w-full text-blue-700">Login</button>
        </form>

        <p className="py-4 text-center">
          New for Website? Please
          <Link className=" underline text-blue-700" to="/registration">
            Register
          </Link>
        </p>
      </div>
      <GoogleLogin></GoogleLogin>
    </div>
  );
};

export default Login;
