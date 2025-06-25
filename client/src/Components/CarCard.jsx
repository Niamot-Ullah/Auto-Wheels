import React from 'react';
import { FaCar, FaCheckCircle, FaClock } from 'react-icons/fa';
import { FaBangladeshiTakaSign, FaLocationDot } from 'react-icons/fa6';

const CarCard = ({ car }) => {
    const { _id, model, price, availability, location, image } = car;
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto'>
            <div className="card bg-base-100 w-96 shadow-sm hover:shadow-lg">
                <figure>
                    <img
                        src={image}
                        alt={model} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between items-center text-gray-700 '><FaCar size={20} className='text-red-500' /><p className='text-lg font-bold'>{` ${model}`}</p></div>
                    <div className='flex justify-between items-center'><FaBangladeshiTakaSign size={15} className='text-yellow-700' /><p className='text-md font-bold'>Price : {price}</p></div>
                    <div className='flex justify-between items-center'><FaCheckCircle size={15} className='text-green-700' /><p className='text-md font-bold'>{availability}</p></div>
                    <div className='flex justify-between items-center'><FaLocationDot size={15} className='text-blue-700' /><p className='text-md font-bold'>{location}</p></div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;