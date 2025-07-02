import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
    return (
        <>
            <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
                <nav>
                    <h6 className="footer-title">Auto-Wheels</h6>
                    <p className="text-gray-200">
                        Auto-Wheels is your trusted marketplace to <br></br> post and find
                        quality cars for rent.
                    </p>
                </nav>
                <nav>
                    <h6 className="footer-title">Contact Us</h6>
                    <p>
                        Email :{" "}
                        <Link className="text-blue-300 hover:underline">
                            support@Auto-Wheels.com
                        </Link>
                    </p>
                    <p>
                        Phone :{" "}
                        <Link className="text-blue-300 hover:underline">+1234-56789</Link>
                    </p>
                    <p>address : 123 Cars Ave, New Market, Dhaka</p>
                </nav>
                <nav>
                    <h6 className="footer-title">Useful Links</h6>
                    
                    <div className="flex gap-3 pt-2">
                        <Link>
                            <FaFacebook size={25} />
                        </Link>
                        <Link>
                            <FaInstagram size={25} />
                        </Link>
                        <Link>
                            <FaLinkedin size={25} />
                        </Link>
                    </div>
                </nav>
            </footer>
            <div className=" text-center bg-black text-white py-6 border-t-1 border-gray-50">
                <span>©2025 All rights reserved</span>
            </div>
        </>
    );
};

export default Footer;
