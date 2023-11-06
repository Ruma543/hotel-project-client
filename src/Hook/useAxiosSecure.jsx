import axios from 'axios';
import useAuth from './useAuth';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { user, userLogOut } = useAuth();
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    axios.interceptors.response.use(
      res => {
        return res;
      },
      error => {
        console.log('error', error.response);
        if (error.response.status === 401 || error.response.status === 403) {
          console.log('logout the user');
          userLogOut()
            .then(() => {
              navigate('/login');
            })
            .catch(error => {
              console.log(error);
            });
        }
      }
    );
  }, []);
  return axiosSecure;
};

export default useAxiosSecure;
