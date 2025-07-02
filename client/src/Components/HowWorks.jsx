import React from 'react';
import { FaCheck, FaFirefoxBrowser, FaPlus } from 'react-icons/fa';
import { MdAccountBalance } from 'react-icons/md';
import { motion } from "motion/react"

const HowWorks = () => {
    return (
        <div className='bg-sky-50 my-15 py-15 px-0 '>
            <div className='w-11/12 md:w-10/12 mx-auto '>
                <div className='text-center font-bold text-4xl  pb-2'><h1>How It Works!</h1></div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10 gap-3 space-y-5  '>

                    {/* one  */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        onHoverStart={() => console.log('hover started!')}
                        className='text-center space-y-2  py-10 rounded-xl bg-white shadow-sm'>
                        <MdAccountBalance className='justify-self-center mb-8 text-blue-700' size={35} />
                        <h3 className='text-2xl font-semibold'>Create an Account</h3>
                        <p className='text-gray-500'>Sign up quickly with your email <br></br> or social login to get started.</p>
                    </motion.div>
                    {/* two */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }} className='text-center space-y-2  py-10 rounded-xl bg-white shadow-sm'>
                        <FaFirefoxBrowser className='justify-self-center mb-8 text-blue-700' size={35} />
                        <h3 className='text-2xl font-semibold'>Browse Cars</h3>
                        <p className='text-gray-500'>Explore a wide variety of cars <br></br> posted by clients in different <br></br> categories.</p>
                    </motion.div>
                    {/* three  */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }} className='text-center space-y-2  py-10 rounded-xl bg-white shadow-sm'>
                        <FaPlus className='justify-self-center mb-8 text-blue-700' size={35} />
                        <h3 className='text-2xl font-semibold'>Place Your Booking</h3>
                        <p className='text-gray-500'>Select the Car based on your <br /> Budget and apply for booking</p>
                    </motion.div>
                    {/* four  */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }} className='text-center space-y-2  py-10 rounded-xl mb-5  bg-white shadow-md'>
                        <FaCheck className='justify-self-center mb-8 text-blue-700' size={35} />
                        <h3 className='text-2xl font-semibold'>Get Booked</h3>
                        <p className='text-gray-500'>Once your booking is confirmed, start  enjoying your ride </p>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default HowWorks;