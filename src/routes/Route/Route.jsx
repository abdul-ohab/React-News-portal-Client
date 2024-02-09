import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../components/Home/Home/Home";
import Category from "../../components/Category/Category/Category";
import News from "../../components/News/News/News";
import Login from "../../components/SignIn/Login/Login";
import Register from "../../components/SignIn/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import TermsAndConditions from "../../components/others/Terms&Conditions/TermsAndConditions";
import Profile from "../../components/others/Profile/Profile";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () =>fetch(`http://localhost:5000/news`)
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({params}) =>fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/news/:id',
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({params}) =>fetch(`http://localhost:5000/news/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <TermsAndConditions></TermsAndConditions>
            },
            {
                path: '/profile',
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            }
        ]
    }
    
])