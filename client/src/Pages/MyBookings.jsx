import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AuthContext } from '.././Provider/AuthProvider';
import { RiDeleteBinLine } from 'react-icons/ri';
import { LuNotebookPen } from 'react-icons/lu';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import useAxiosSecure from '.././hooks/useAxiosSecure';
import { toast } from 'react-toastify';

const MyBookings = () => {
    const { user } = React.useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [orders, setOrders] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(null);
    

    // console.log(orders);

    useEffect(() => {
        axiosSecure(`/my-orders/${user?.email}`)
            .then((data) => {
                // console.log(data?.data);
                setOrders(data?.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [user, axiosSecure]);

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Do you want to cancel this booking?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!',
            cancelButtonText: 'No',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/place-order/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            setOrders(orders.filter((order) => order._id !== id));
                            Swal.fire({
                                title: 'Order cancelled!',
                                text: '',
                                icon: 'success',
                            });
                        }
                    });
            }
        });
    };

    const handleUpdate = (booking) => {
        setSelectedBooking(booking);
        setIsModalOpen(true);
        // console.log(selectedBooking._id);
    };
    
    // console.log(selectedBooking?._id);
    const handleMyBookingsUpdate = (e) =>{
        e.preventDefault();
            const form = new FormData(e.target);
            const data = Object.fromEntries(form)
            // console.log(selectedBooking?._id);

            // fetch(`${import.meta.env.VITE_API_URL}/update-my-orders/${selectedBooking?._id}`, {
            //                 method: 'PATCH',
            //                 headers: {
            //                     "content-type": "application/json",
            //                 },
            //                 body: JSON.stringify(data)
            //             }).then(res => res.json()).then(data => {
            //                 console.log(data);
            //             })
                        // toast.success("Booking Date Updated Successfully");
                         if (!selectedBooking?._id) {
    return toast.error("Booking ID not found.");
  }

  fetch(`${import.meta.env.VITE_API_URL}/update-my-orders/${selectedBooking._id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((resData) => {
      console.log(resData);
      toast.success("Booking Date Updated Successfully");
      setIsModalOpen(false);
      
    })
    .catch((error) => {
      console.error(error);
      toast.error("Failed to update booking.");
    });
                       
    }
    console.log(selectedBooking);

    return (
        <div className="min-h-screen flex flex-col items-center bg-white py-10 px-4">
            <h1 className="text-3xl font-bold text-purple-700 mb-6">My Booked Cars</h1>
            <div className="w-full max-w-4xl overflow-x-auto">
                <table className="min-w-full border border-gray-300 text-left">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Image</th>
                            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Model</th>
                            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Start Date</th>
                            <th className="px-4 py-2 font-semibold text-sm text-gray-700">End Date</th>
                            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Price</th>
                            <th className="px-4 py-2 font-semibold text-sm text-gray-700">Location</th>
                            <th className="px-4 py-2 font-semibold text-sm text-gray-700 text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order._id} className="border-t border-gray-200">
                                <td className="px-4 py-2">
                                    <img alt="" src={order.image} className="w-15 h-10" />
                                </td>
                                <td className="px-4 py-2">{order.model}</td>
                                <td className="px-4 py-2">{order.startDate}</td>
                                <td className="px-4 py-2">{order.endDate}</td>
                                <td className="px-4 py-2">{order.price}</td>
                                <td className="px-4 py-2">{order.location}</td>
                                <td className="px-4 py-2 space-x-2 text-center">
                                    <div className="flex justify-evenly items-center">
                                        <Link onClick={() => handleUpdate(order)}>
                                            <LuNotebookPen size={25} className="bg-blue-700 text-white p-1 rounded-sm" />
                                        </Link>
                                        <Link onClick={() => handleDelete(order._id)}>
                                            <RiDeleteBinLine size={25} className="bg-red-600 text-white p-1 rounded-sm" />
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
                    <form onSubmit={handleMyBookingsUpdate} className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                        <h3 className="text-lg font-semibold mb-4">Modify Booking Dates</h3>

                        <input
                        name='startDate'
                            type="date"
                            defaultValue={orders?.startDate}
                            className="w-full mb-3 p-2 border rounded"
                        />
                        <input
                        name='endDate'
                            type="date"
                            defaultValue={orders?.endDate}
                            className="w-full mb-4 p-2 border rounded"
                        />

                        <div className="flex justify-end gap-2">
                            <button
                                // onClick={() => {
                                //     // Update booking logic here if needed
                                //     setIsModalOpen(false);
                                // }}
                                type='submit'
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                            >
                                Confirm
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-300 text-gray-800 px-4 py-2 rounded hover:bg-gray-400"
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

        </div>
    );
};

export default MyBookings;
