import React from 'react';
import { FaCar, FaCheckCircle, FaClock } from 'react-icons/fa';
import { FaBangladeshiTakaSign, FaLocationDot } from 'react-icons/fa6';

const CarCard = ({ car }) => {
    const { _id, model, price, availability, location, image } = car;
    return (
        <>
            <div className="card bg-base-100 h-[350px]  shadow-sm hover:shadow-xl border border-gray-200">
                <figure className='flex-1/2'>
                    <img
                    className='object-cover'
                        src={image}
                        alt={model} />
                </figure>
                <div className="card-body flex-1/2">
                    <div className='flex justify-between items-center text-gray-700 '><FaCar size={20} className='text-red-500' /><p className='text-lg font-bold'>{` ${model}`}</p></div>
                    <div className='flex justify-between items-center'><FaBangladeshiTakaSign size={15} className='text-yellow-700' /><p className='text-md font-bold'>Price : {price}</p></div>
                    <div className='flex justify-between items-center'><FaCheckCircle size={15} className='text-green-700' /><p className='text-md font-bold'>{availability}</p></div>
                    <div className='flex justify-between items-center'><FaLocationDot size={15} className='text-blue-700' /><p className='text-md font-bold'>{location}</p></div>
                </div>
            </div>
        </>
    );
};

export default CarCard;