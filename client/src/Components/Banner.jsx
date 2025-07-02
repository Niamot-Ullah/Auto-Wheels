import React from 'react';
import bannerImg from '../assets/lamborgini-banner.jpg'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='relative w-11/12 md:w-10/12 px-0 mx-auto' >
            <div className=" z-1 absolute bottom-[20px] lg:top-[20px] left-1/2 transform -translate-x-1/2 w-full">
                <p className='text-3xl md:text-4xl font-semibold md:font-bold w-full  mb-3 mx-auto text-center'>Drive Your Dreams</p>
                <div className='text-center'><Link className='btn btn-active hover:bg-gray-300' to='/cars'>View Available Cars</Link></div>
            </div>
            <img src={bannerImg} alt="Banner" className='mx-auto rounded-4xl h-[500px] w-full object-cover'/>

        </div>
    );
};

export default Banner;