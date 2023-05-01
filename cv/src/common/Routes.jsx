import {createBrowserRouter} from 'react-router-dom';
import {AppRoutes} from "./AppRoutes";
import Demo from "../pages/Demo/Demo";
import Error from "../pages/Error/Error";
import Admin from "../pages/Admin/Admin";
import Login from "../pages/Login/Login";
import LoginHOC from "../components/HOC/SignUpLoginHOC";
import SignUp from "../pages/SignUp/SignUp";
import SignUpLoginHOC from "../components/HOC/SignUpLoginHOC";

export const router = createBrowserRouter([
    {
        path:AppRoutes.MAIN,
        element: <Demo/>,
        errorElement:<Error/>
    },
    {
      path:AppRoutes.SIGNUP,
      element:<SignUpLoginHOC Component={SignUp}/>
    },
    {
        path:AppRoutes.LOGIN,
        element: <SignUpLoginHOC Component={Login}/>
    },
    {
        path:AppRoutes.ADMIN,
        element:<Admin/>
    }
])