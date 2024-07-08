
import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SingUp/SingUp";
import ContactUs from "../Pages/ContactUs/ContactUs";
import Shop from "../Pages/Shop/Shop";
import Book from "../Pages/Book/Book";
import AboutUs from "../Pages/AbouUs/AboutUs";
import Dasboard from "../LayOut/Dasboard";
import AddItem from "../Pages/Dashboard/Admin/AddItem/AddItem";
import AllUser from "../Pages/Dashboard/Admin/AllUser/AllUser";
import ManageALlitem from "../Pages/Dashboard/Admin/ManageAllItem/ManageALlitem";
import MyBooking from "../Pages/Dashboard/User/MyBooking/MyBooking";
import ManageBooking from "../Pages/Dashboard/Admin/ManageBooking/ManageBooking";
import PaymentHistory from "../Pages/Dashboard/Admin/PaymentHistory/PaymentHistory";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Element from "../Pages/Element/Element";
import useGetBookingSingle from "../Hooks/useBookingGetSingle/useGetBookingSingle";
import UserPayment from "../Pages/Dashboard/User/UserPayment/UserPayment";
import MyBook from "../Pages/Dashboard/User/MyBook/MyBook";
import BookAdmin from "../Pages/Dashboard/Admin/BookAdmin/BookAdmin";
import AdminRoutes from "../PrivateRoutes/AdminRoutes";
import UpdateItem from "../Pages/UpdateItem/UpdateItem";
import useSingleProduct from "../Hooks/useSingleProduct/useSingleProduct";
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <PrivateRoutes><ContactUs /></PrivateRoutes>
            },
            {
                path: '/shop',
                element: <PrivateRoutes><Shop /></PrivateRoutes>
            },
            {
                path: "/book",
                element: <PrivateRoutes><Book /></PrivateRoutes>
            },
            {
                path: "/about",
                element: <PrivateRoutes><AboutUs /></PrivateRoutes>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/singup',
                element: <Signup />
            },


        ]
    },
    {
        path: '/dashboard',
        element: <Dasboard />,
        children: [
            {
                path: '/dashboard/add-item',
                element: <AdminRoutes><AddItem /></AdminRoutes>
            },
            {
                path: '/dashboard/all-user',
                element: <AdminRoutes><AllUser /></AdminRoutes>
            },
            {
                path: '/dashboard/manage-order',
                element: <AdminRoutes><ManageBooking /></AdminRoutes>
            },
            {
                path: '/dashboard/manage-all-item',
                element: <AdminRoutes><ManageALlitem /></AdminRoutes>
            },
           
            {
                path: '/dashboard/payment-history',
                element: <AdminRoutes><PaymentHistory /></AdminRoutes>
            },


            {
                path: '/dashboard/my-order',
                element: <PrivateRoutes><MyBooking /></PrivateRoutes>
            },
            {
                path: '/dashboard/manage-booking',
                element: <PrivateRoutes><BookAdmin /></PrivateRoutes>
            },
            {
                path: '/dashboard/my-booking',
                element: <PrivateRoutes><MyBook /></PrivateRoutes>
            },
            {
                path: '/dashboard/user-payment',
                element: <PrivateRoutes><UserPayment /></PrivateRoutes>
            },
            {
                path: '/dashboard/user-payment',
                element: <PrivateRoutes><UserPayment /></PrivateRoutes>
            },
            {
                path: '/dashboard/update-item/:id',
                element: <AdminRoutes><UpdateItem /></AdminRoutes>,
                loader: ({ params }) => useSingleProduct(params.id)
            },
            {
                path: '/dashboard/checkout-payment/:id',
                element: <Element />,
                loader: ({ params }) => useGetBookingSingle(params.id)
            },

        ]
    },
])