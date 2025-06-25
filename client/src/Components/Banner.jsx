import React from 'react';
import bannerImg from '../assets/lamborgini-banner.jpg'
import { Link } from 'react-router';

const Banner = () => {
    return (
        <div className='relative mx-auto' >
            <div className=" z-1 absolute bottom-[35px] lg:top-[20px] left-1/2 transform -translate-x-1/2">
                <p className='text-2xl md:text-4xl font-semibold md:font-bold mb-3 bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text'>Drive Your Dreams</p>
                <div className='text-center'><Link className='btn btn-active hover:bg-gray-300' to='/cars'>View Available Cars</Link></div>
            </div>
            <img src={bannerImg} alt="Banner" className='mx-auto rounded-4xl h-[500px] md:w-11/12 object-cover'/>

        </div>
    );
};

export default Banner;