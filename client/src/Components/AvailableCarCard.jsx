import React from 'react';
import { FaBookmark, FaCar, FaCheckCircle, FaClock } from 'react-icons/fa';
import { FaBangladeshiTakaSign, FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router';

const AvailableCarCard = ({ car }) => {
    const { _id, model, price, availability, location, image,bookingCount } = car;
    // console.log(car);
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto'>
            <div className="card bg-base-100 w-96 shadow-sm hover:shadow-lg">
                <figure className=''>
                    <img
                        src={image}
                        alt={model}  />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center text-gray-700 '><FaCar size={20} className='text-red-500' /><p className='text-lg font-bold'>{` ${model}`}</p></div>
                    <div className='flex justify-between items-center'><FaBangladeshiTakaSign size={15} className='text-yellow-700' /><p className='text-md font-semibold'>Price : {price}</p></div>
                    <div className='flex justify-between items-center'><FaCheckCircle size={15} className='text-green-700' /><p className='text-md font-semibold'>{availability}</p></div>
                    <div className='flex justify-between items-center'><FaLocationDot size={15} className='text-blue-700' /><p className='text-md font-semibold'>{location}</p></div>
                    <div className='flex justify-between items-center'><FaBookmark size={15} className='text-purple-700' /><p className='text-md font-semibold'>Booking Count : {bookingCount.length}</p></div>
                </div>
                    <Link to={`/car/${_id}`} className="btn btn-active hover:btn-secondary mt-2">Book Now</Link>
            </div>
        </div>
    );
};

export default AvailableCarCard;