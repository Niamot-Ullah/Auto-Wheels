import React from 'react';
import { FaMapMarkerAlt, FaCheckCircle, FaCar, FaMoneyBillWave, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router';

const AvailableCarCard2 = ({car}) => {
     const { _id, model, price, availability, location, image,bookingCount } = car;
  return (
    <div className="bg-orange-50 rounded-md p-4 shadow flex items-center justify-between max-w-5xl mx-auto">
      {/* Left: Image and Info */}
      <div className="flex items-start gap-4">
        {/* Image */}
        <img
          src={image}
          alt="Rickshaw"
          className="w-24 h-24 object-cover rounded"
        />
        {/* Info */}
        <div>
          <h2 className="text-lg font-semibold flex items-center gap-1 text-orange-800">
            <FaCar /> {model}
          </h2>
          <p className="text-sm flex items-center gap-1 text-gray-700">
            <FaMoneyBillWave /> Rental Price: <strong>{price}</strong>
          </p>
          <p className="text-sm flex items-center gap-1 text-gray-700">
            <FaMapMarkerAlt className="text-orange-500" /> Location: {location}
          </p>
          <p className="text-sm flex items-center gap-1 text-green-600">
            <FaCheckCircle /> {availability}
          </p>
          <p className="text-sm flex items-center gap-1 text-purple-600">
            <FaClipboardList /> Booking Count: {bookingCount.length}
          </p>
          
        </div>
      </div>
      {/* Right: Button */}
      <Link to={`/car/${_id}`} className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded shadow">
        Book Now
      </Link>
    </div>
  );
};

export default AvailableCarCard2;
