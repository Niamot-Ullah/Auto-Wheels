import React, { use } from 'react';
import { NavLink } from 'react-router';
import logo from '../assets/car-logo.jpg'
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { user, logOut } = use(AuthContext)
    
    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
                toast.warning("Logout successful");
            })
            .catch((error) => {
                // An error happened.
                console.error("Logout error:", error);
            });
    }

    const link = (
        <>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-700 text-white font-bold ' : 'font-semibold'} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-700 text-white font-bold ' : 'font-semibold'} to="/cars">Cars</NavLink></li>

            {
                user && <div className='flex flex-col lg:flex-row'>
                    <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-700 text-white font-bold ' : 'font-semibold'} to="/add-cars">Add Car</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-700 text-white font-bold ' : 'font-semibold'} to={`/my-cars/${user?.email}`}>MyCars</NavLink></li>
            <li><NavLink className={({ isActive }) => isActive ? 'bg-blue-700 text-white font-bold ' : 'font-semibold'} to="/my-bookings">My Bookings</NavLink></li>
                </div>
            }

            
        </>
    )
    // console.log(user?.email);

    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className=" lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-100 text-md rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <div className='flex pl-4'>
                        <img alt='' src={logo} className='w-10 rounded-xl mr-1 md:mr-3'></img>
                        <NavLink to="/" className=" font-bold text-lg md:text-xl  self-center">Auto Wheels</NavLink>

                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {
                        user ? (
                            <div className='flex items-center space-x-1.5 md:space-x-3'>
                                <NavLink >
                                    <img alt={user.displayName} className="w-10 rounded-xl" src={user?.photoURL}></img>
                                </NavLink>
                                <button onClick={handleLogOut} className="btn btn-outline btn-secondary">LogOut</button>
                            </div>
                        ) : (
                            <div className='space-x-1.5 md:space-x-3'>
                                <NavLink to='/login' className="btn btn-outline btn-primary">Login</NavLink>
                                <NavLink to='/register' className="btn btn-outline btn-secondary">Register</NavLink>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;