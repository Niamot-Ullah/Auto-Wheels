import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router'
import MainLayout from './Layouts/MainLayout.jsx'
import Home from './Pages/Home.jsx'
import Cars from './Pages/Cars.jsx'
import AddCars from './Pages/AddCars.jsx'
import MyCars from './Pages/MyCars.jsx'
import MyBookings from './Pages/MyBookings.jsx'
import Register from './Pages/Register.jsx'
import Login from './Pages/Login.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import AuthProvider from './Provider/AuthProvider.jsx'
import { ToastContainer } from 'react-toastify'
import PrivateRoute from './Provider/PrivateRoute.jsx'
import axios from 'axios'
import CarDetails from './Pages/CarDetails.jsx'
import Loading from './Pages/Loading.jsx'
import UpdateCar from './Pages/UpdateCar.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => axios(`https://server-side-auto-wheels.vercel.app/featured-cars`),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/cars',
        element: <Cars></Cars>,
        loader: () => axios(`https://server-side-auto-wheels.vercel.app/cars`),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/car/:id',
        element: <PrivateRoute><CarDetails></CarDetails></PrivateRoute>,
        loader: ({ params }) => axios(`https://server-side-auto-wheels.vercel.app/car/${params.id}`),
        hydrateFallbackElement: <Loading></Loading>
      },
      {
        path: '/add-cars',
        element: <PrivateRoute><AddCars></AddCars></PrivateRoute>
      },
      {
        path: '/my-cars/:email',
        element: <PrivateRoute><MyCars></MyCars></PrivateRoute>,
        loader: ({ params }) => axios(`https://server-side-auto-wheels.vercel.app/my-cars/${params.email}`),
        hydrateFallbackElement: <Loading></Loading>
      },
       {
        path:'/update-car/:id',
        element:<UpdateCar></UpdateCar>,
        loader:({params})=>axios(`https://server-side-auto-wheels.vercel.app/car/${params.id}`)
      },
      {
        path: '/my-bookings',
        element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
    <ToastContainer />
  </StrictMode>,
)
