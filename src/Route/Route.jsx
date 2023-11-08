import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Rooms from '../Pages/Rooms/Rooms';
import MyBooking from '../Pages/MyBooking/MyBooking';
import Login from '../Pages/Login/Login';
import Registration from '../Pages/Registration/Registration';
import AddRoom from '../Pages/AddRooms/AddRoom';
import RoomDetails from '../Pages/RoomDetails/RoomDetails';
import BookPage from '../Component/BookPage/BookPage';
import PrivateRoute from './PrivateRoute';
import UpdateDate from '../Pages/UpdateDate/UpdateDate';
import ReviewPage from '../Pages/ReviewPage/ReviewPage';
import Gallery from '../Pages/Gallery/Gallery';

const Route = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/rooms',
        element: <Rooms></Rooms>,
      },
      {
        path: '/details/:id',
        element: <RoomDetails></RoomDetails>,
        loader: ({ params }) =>
          fetch(
            `https://hotel-project-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: '/bookPage/:id',
        element: (
          <PrivateRoute>
            <BookPage></BookPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hotel-project-server.vercel.app/services/${params.id}`
          ),
      },
      {
        path: '/myBooking',
        element: (
          <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        ),
      },
      {
        path: '/gallery',
        element: <Gallery></Gallery>,
      },
      {
        path: '/update/:id',
        element: (
          <PrivateRoute>
            <UpdateDate></UpdateDate>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hotel-project-server.vercel.app/bookings/${params.id}`
          ),
      },
      {
        path: '/review/:id',
        element: (
          <PrivateRoute>
            <ReviewPage></ReviewPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://hotel-project-server.vercel.app/bookings/${params.id}`
          ),
      },
      {
        path: '/addRoom',
        element: <AddRoom></AddRoom>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/registration',
        element: <Registration></Registration>,
      },
    ],
  },
]);

export default Route;
