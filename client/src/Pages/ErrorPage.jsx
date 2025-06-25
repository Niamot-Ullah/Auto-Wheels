import React from 'react';
import Navbar from '../Components/Navbar';
import { Link } from 'react-router';
import errorImg from '../assets/error-img (1).jpg';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
           <div className='text-center grid justify-center my-5'>
            <img src={errorImg} alt='errorImg'></img>
            <h1 className='text-4xl text-red-500 font-bold'>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for doesn't exist</p>
            <Link to='/' className='bg-blue-600 hover:bg-blue-800 mx-auto text-white my-4 p-2 px-7 rounded-3xl font-bold '>Go Back Home</Link>
           </div>
        </div>
    );
};

export default ErrorPage;