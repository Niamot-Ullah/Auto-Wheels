import React, { useEffect, useState } from "react";
import { LuNotebookPen } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLoaderData, Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const MyCars = () => {
    const data = useLoaderData();
    // const navigate = useNavigate()

    const [cars, setCars] = useState(data?.data || []);
    const { _id } = cars
    // console.log(cars);


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/car/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            setCars(cars.filter((car) => car._id !== id));
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };

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
        <div className="min-h-screen flex flex-col items-center bg-white py-10 px-4">
            <h1 className="text-3xl font-bold text-purple-700 mb-6">
                My Posted Cars
            </h1>
            {/* sort btn  */}
            <div>

                <select
                    onChange={handleSortChange}
                    value={sort}
                    className="select md:w-[400px] mb-5 text-gray-600 border rounded p-2"
                >
                    <option defaultValue='Sort' disabled={true}>Sort</option>
                    <option value="asc" className="font-bold">Price: Low to High</option>
                    <option value="des" className="font-bold">Price: High to Low</option>
                </select>
            </div>
            <div className="w-full max-w-4xl overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-left">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 font-semibold text-sm text-gray-700">
                                Image
                            </th>
                            <th className="px-4 py-2 font-semibold text-sm text-gray-700">
                                Model
                            </th>
                            <th className="px-4 py-2 font-semibold text-sm text-gray-700">
                                Price
                            </th>
                            <th className="px-4 py-2 font-semibold text-sm text-gray-700">
                                Availability
                            </th>
                            <th className="px-4 py-2 font-semibold text-sm text-gray-700">
                                Location
                            </th>
                            <th className="px-4 py-2 font-semibold text-sm text-gray-700 text-center">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {cars.map((car) => (
                            <tr key={car?._id} className="border-t border-gray-200">
                                <td className="px-4 py-2">
                                    <img alt="" src={car?.image} className="w-15 h-10"></img>
                                </td>
                                <td className="px-4 py-2">{car?.model}</td>
                                <td className="px-4 py-2">{car?.price}</td>
                                <td className="px-4 py-2">{car?.availability}</td>
                                <td className="px-4 py-2">{car?.location}</td>
                                <td className="px-4 py-2 space-x-2">
                                    <div className="flex justify-evenly items-center">
                                        {/* update  */}

                                        <Link to={`/update-car/${car._id}`}>
                                            <LuNotebookPen
                                                size={25}
                                                className="bg-blue-700 text-white p-1 rounded-sm cursor-pointer"
                                            />
                                        </Link>

                                        {/* delete */}
                                        <Link className="">
                                            <RiDeleteBin6Line
                                                onClick={() => handleDelete(car?._id)}
                                                size={25}
                                                className="bg-red-600 text-white p-1 rounded-sm"
                                            />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCars;
