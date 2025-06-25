import React, { use, useState } from 'react';
import { FaBookmark, FaCar, FaCheckCircle } from 'react-icons/fa';
import { FaBangladeshiTakaSign, FaLocationDot } from 'react-icons/fa6';
import { MdOutlineDescription, MdOutlineFeaturedPlayList } from 'react-icons/md';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import axios from 'axios';


const CarDetails = () => {
    const { user } = use(AuthContext)
    const car = useLoaderData();
    const { _id, model, price, availability, location, image, features, description, bookingCount, email } = car.data;
    // const [booked, setBooked] = useState(bookingCount.includes(user?.email))
    const [bookCount, setBookCount] = useState(bookingCount.length);


    const handleOrder = (e) => {
        e.preventDefault();
        const form = e.target;
        const startDate = form.startDate.value;
        const endDate = form.endDate.value;
        if (user?.email === email) return toast.error('You cannot book your own car');

        const orderInfo = { carId: _id, customerEmail: user?.email, image, model, price, location, availability, features, description, startDate, endDate };
        //handleBooking
        axios.post(`${import.meta.env.VITE_API_URL}/place-order/${_id}`, orderInfo).then(data => console.log(data));
        toast.success(`You have booked ${model} successfully`)
        form.reset()
    }
    return (
        <div className='w-11/12  mx-auto my-24'>
            <div className="card card-side bg-base-100 shadow-lg flex flex-col lg:flex-row">
                <figure className='w-1/2 mx-auto'>
                    <img
                        src={image}
                        alt={model} className='w-full h-auto' />
                </figure>
                <div className="card-body space-1-2">
                    <div className='flex justify-between items-center text-gray-700 '><FaCar size={20} className='text-red-500' /><p className='text-lg font-bold'>{` ${model}`}</p></div>
                    <div className='flex justify-between items-center'><MdOutlineFeaturedPlayList size={15} className='text-purple-700' /><p className='text-md font-semibold'>Features : {features}</p></div>
                    <div className='flex justify-between items-center'><MdOutlineDescription size={15} className='text-green-700' /><p className='text-md font-semibold'>Description : {description}</p></div>
                    <div className='flex justify-between items-center'><FaBangladeshiTakaSign size={15} className='text-yellow-700' /><p className='text-md font-semibold'>Price : {price}</p></div>
                    <div className='flex justify-between items-center'><FaCheckCircle size={15} className='text-green-700' /><p className='text-md font-semibold'>{availability}</p></div>
                    <div className='flex justify-between items-center'><FaLocationDot size={15} className='text-blue-700' /><p className='text-md font-semibold'>{location}</p></div>
                    <div className='flex justify-between items-center'><FaBookmark size={15} className='text-purple-700' /><p className='text-md font-semibold'>Booking Count : {bookCount}</p></div>
                    <div className="card-actions justify-end  mt-5">
                        {/* Open the modal using document.getElementById('ID').showModal() method */}



                        <form onSubmit={handleOrder}>
                            {/* Modal trigger */}
                            <label htmlFor="booking-modal" className="btn btn-primary">
                                Book Now
                            </label>

                            {/* Hidden checkbox controls modal open/close */}
                            <input type="checkbox" id="booking-modal" className="modal-toggle" />

                            {/* Modal body */}
                            <div className="modal">
                                <div className="modal-box relative">


                                    <h3 className="text-lg font-bold">Booking Confirmation</h3>
                                    <p className="py-2">You are booking: <strong>{model}</strong></p>
                                    <p className="py-1">Price Per Day: ${price}</p>


                                    <div className="py-2">
                                        <label className="label">Start Date</label>
                                        <input name='startDate' type="date" className="input input-bordered w-full mb-2" required />

                                        <label className="label">End Date</label>
                                        <input name='endDate' type="date" className="input input-bordered w-full" required />
                                    </div>

                                   

                                    <div className="modal-action">
                                        {/* Close button using label */}
                                        <label htmlFor="booking-modal" className="btn">
                                            Close
                                        </label>
                                        <label htmlFor="booking-modal" className="btn btn-primary">
                                            <button type="submit">Confirm Booking</button>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarDetails;