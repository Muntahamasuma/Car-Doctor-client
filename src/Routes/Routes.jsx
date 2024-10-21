import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp";
import ServiceDetails from "../Pages/ServiceDetails";
import CheckOut from "../Pages/CheckOut";

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
          loader: ({params}) => fetch(`http://localhost:9000/services/${params.id}`)
        },
        {
          path: '/checkout/:id',
          element: <CheckOut></CheckOut>,
          // loader: ({params}) => fetch(`http://localhost:9000/services/${params.id}`)
        }
      ]
    },
  ]);
  export default router;