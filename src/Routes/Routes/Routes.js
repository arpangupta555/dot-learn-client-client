import { createBrowserRouter } from "react-router-dom";
import Error from "../../components/Error";
import Home from "../../components/Home";
import Main from "../../layout/Main";
import Courses from "../../components/Courses"
import Blog from "../../components/Blog"
import Faq from "../../components/Faq"
import Category from "../../components/Category";
import Login from "../../components/Login"
import Register from "../../components/Register";
import Premium from "../../components/Premium";
import PrivateRoute from "./PrivateRoute";

export const routes = createBrowserRouter([

    {
        path: "/",

        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [

            {

                path: '/',
                element: <Home></Home>,


            },
            {

                path: '/home',
                element: <Home></Home>,


            },
            {

                path: '/courses',
                element: <Courses></Courses>,


            },
            {

                path: '/blog',
                element: <Blog> </Blog>,


            },
            {

                path: '/faq',
                element: <Faq></Faq>,


            },
            {

                path: '/login',
                element: <Login></Login>,


            },
            {

                path: '/register',
                element: <Register></Register>,


            },
            {

                path: '/premium',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>,


            },

            {

                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)


            },

        ]

    }
])