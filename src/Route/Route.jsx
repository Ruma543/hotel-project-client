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
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: '/bookPage/:id',
        element: (
          <PrivateRoute>
            <BookPage></BookPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: '/myBooking',
        element: <MyBooking></MyBooking>,
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
