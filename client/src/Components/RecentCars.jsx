import React, { useState } from 'react';
import CarCard from './CarCard';
import { BsStars } from 'react-icons/bs';

const RecentCars = ({ data }) => {
    const [cars, setCars] = useState(data?.data || []);
    // console.log(cars);

    return (
        <>
            <div className='flex justify-center py-10 mt-10'><BsStars className='text-yellow-600 mr-1' size={30} /> <span className='font-bold text-3xl md:text-5xl '>Recent Cars</span></div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 my-2 justify-between items-center'>

                {
                    cars.map(car => <CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
        </>
    );
};

export default RecentCars;