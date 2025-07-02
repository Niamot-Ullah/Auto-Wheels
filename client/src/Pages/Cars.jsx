import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AvailableCarCard from '../Components/AvailableCarCard';
import { AuthContext } from '../Provider/AuthProvider';
import AvailableCarCard2 from '../Components/AvailableCarCard2';

const Cars = () => {

    const { user } = use(AuthContext)
    // console.log(user?.accessToken);
    const data = useLoaderData()
    const [cars, setCars] = useState(data?.data || []);
    const [isListView, setIsListView] = useState(false)
    const [searchText, setSearchText] = useState('')
    const toggleView = () => {
        setIsListView(!isListView)
    }
    const [sort, setSort] = useState('asc')

    useEffect(() => {
        if (data?.data) {
            // Initial sort when data loads
            const sortedCars = [...data.data].sort((a, b) => a.price - b.price);
            setCars(sortedCars);
        }
    }, [data]);

    const handleSortChange = (e) => {
        const sortType = e.target.value;
        setSort(sortType);

        const sortedCars = [...data.data].sort((a, b) => {
            return sortType === "asc"
                ? a.price - b.price // Low to high
                : b.price - a.price; // High to low
        });

        setCars(sortedCars);
    };

    return (
        <div className='w-11/12 md:10/12 lg:w-10/12 mx-auto mt-6'>
            <div className='flex flex-col md:flex-row justify-between'>
                <form  >
                    <label className="input">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input value={searchText} onChange={e => {
                            setSearchText(e.target.value)
                            if (e.target.value === '') return setCars(data.data)
                            const searchedCars = data.data.filter(car => car.model.toLowerCase().includes(e.target.value.toLowerCase()))
                            setCars(searchedCars);
                        }} type="search" placeholder="Search" />
                    </label>
                    {/* <button type='submit' className="btn ml-0 md:ml-5 mt-1 md:mt-0">Search</button> */}
                </form>
                <div onClick={toggleView}>
                    <button className='btn btn-secondary my-1'>Toggle to {isListView ? 'Card' : 'List'} View</button>
                </div>
                <div>

                    <select
                        onChange={handleSortChange}
                        value={sort}
                        className="select w-full mb-5 text-gray-600 border rounded p-2"
                    >
                        <option defaultValue='Sort' disabled={true}>Sort</option>
                        <option value="asc" className="font-bold">Price: Low to High</option>
                        <option value="des" className="font-bold">Price: High to Low</option>
                    </select>
                </div>
            </div>
            <div className={`grid gap-4 my-2 justify-between items-center ${isListView
                ? 'grid-cols-1' // List view
                : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' // Card view
                }`}>
                {
                    cars.map(car =>
                        isListView ?
                            <div><AvailableCarCard2 key={car._id} car={car}></AvailableCarCard2></div>
                            : <div><AvailableCarCard key={car._id} car={car}></AvailableCarCard></div>
                    )}
            </div>
        </div>
    );
};

export default Cars;