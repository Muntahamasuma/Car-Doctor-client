import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp";
import ServiceDetails from "../Pages/ServiceDetails";
import CheckOut from "../Pages/CheckOut";
import Bookings from "../Pages/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        { 
          path: '/signUp',
          element: <SignUp></SignUp>
        },
        {
          path: '/services/:id',
          element: <ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`https://car-doctor-server-livid-ten.vercel.app/services/${params.id}`)
        },
        {
          path: '/checkout/:id',
          element: <CheckOut></CheckOut>,
          loader: ({params}) => fetch(`https://car-doctor-server-livid-ten.vercel.app/services/${params.id}`)
        },
        {
          path:'/bookings',
          element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
        }
      ]
    },
  ]);
  export default router;