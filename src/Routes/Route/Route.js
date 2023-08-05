import { createBrowserRouter } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Main from "../../Layout/Main/Main";
import SignUp from "../../Pages/Home/SignUp/SignUp";
import Login from "../../Pages/Login/Login";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path:'/home',
        element: <Home></Home>
    }
])