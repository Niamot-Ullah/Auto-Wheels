import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import axios from 'axios';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const AddCars = () => {
    const { user } = use(AuthContext)
    const navigate = useNavigate()

    const handleAddCar = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCar = Object.fromEntries(formData.entries())
        newCar.bookingCount = [];
        // console.log(newCar);
        // save car data 
        axios.post(`${import.meta.env.VITE_API_URL}/add-car`, newCar)
            .then(data => {
                console.log(data)
                Swal.fire({
                    title: "Good job!",
                    text: "Car Added Successfully!",
                    icon: "success"
                });
                navigate('/');
            })
            .catch(error => {
                console.log(error);
            })
        // fetch(`${import.meta.env.VITE_API_URL}/add-car`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newCar)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data);
        //     })
        //     .catch(err => {
        //         console.error(err);
        //     });
    }
    return (
        <>
            <div className="hero my-7">
                <div className="hero-content flex-col lg:flex-row-reverse ">
                    <div className="text-center lg:text-left">

                    </div>
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 ">
                        <div className="card-body">

                            <h1 className="text-4xl font-bold pb-1 text-blue-800">Post a  Car!</h1>

                            <form onSubmit={handleAddCar} >
                                {/* model  */}
                                <label className="label text-black font-bold text-lg pb-1 mt-5">Car Model</label>
                                <input name='model' type="text" className="input md:w-[500px] mb-6" placeholder="Enter Car Model" />
                                {/* Daily Rental Price  */}
                                <label className="label text-black font-bold text-lg pb-1 ">Daily Rental Price(BDT)</label>
                                <input name='price' type="text" className="input md:w-[500px] mb-5" placeholder="Enter Daily Rental Price" />
                                {/* Registration Number */}
                                <label className="label text-black font-bold text-lg pb-1 ">Registration Number</label>
                                <input name='Registration-Number' type="text" className="input md:w-[500px] mb-6" placeholder="Enter Registration Number" />
                                {/* Availability */}
                                <label className="label text-black font-bold text-lg pb-1 ">Availability</label>
                                <select name='availability' defaultValue="Enter Availability" className="select md:w-[500px] mb-5 text-gray-600">
                                    <option disabled={true}>Enter Availability</option>
                                    <option className='font-bold'>Available</option>
                                    <option className='font-bold'>Not Available</option>
                                </select>

                                {/* features */}
                                <label className="label text-black font-bold text-lg pb-1 ">Features</label>
                                <input name='features' type="text" className="input md:w-[500px] mb-6" placeholder="Enter Features separated by commas" />
                                {/* Description */}
                                <label className="label text-black font-bold text-lg pb-1 ">Description</label>
                                <textarea name='description' className="textarea h-30 md:w-[500px] mb-5" placeholder="Write detail about the Car..."></textarea>

                                {/* Image URL */}
                                <label className="label text-black font-bold text-lg pb-1 ">Image URL</label>
                                <input name='image' type="text" className="input md:w-[500px] mb-5" placeholder="Enter Image URL" />
                                {/* Location */}
                                <label className="label text-black font-bold text-lg pb-1 ">Location</label>
                                <input name='location' type="text" className="input md:w-[500px] mb-5" placeholder="Enter Location" />
                                {/* Your Name */}
                                <label className="label text-black font-bold text-lg pb-1 ">Your Name</label>
                                <input name='name' value={user?.displayName} type="text" className="input md:w-[500px] mb-5" placeholder="Enter your name" />
                                {/* Your Email */}
                                <label className="label text-black font-bold text-lg pb-1 ">Email</label>
                                <input name='email' value={user?.email} type="email" className="input md:w-[500px] mb-5" placeholder="Enter your email" />


                                <button type='submit' className="btn w-80 md:w-[500px] mb-4  bg-blue-600 hover:bg-blue-800 text-white">Add</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AddCars;