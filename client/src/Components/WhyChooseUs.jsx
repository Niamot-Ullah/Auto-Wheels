import { FaCar, FaDollarSign, FaMouse, FaPhoneAlt } from "react-icons/fa";
import { motion } from "motion/react"

const features = [
    {
        icon: <FaCar className="text-3xl " />,
        title: "Wide Variety of Cars",
        description: "Choose from a diverse fleet of vehicles, including economy, SUVs, and luxury cars. Perfect for every journey and budget.",
    },
    {
        icon: <FaDollarSign className="text-3xl" />,
        title: "Affordable Prices",
        description: "Enjoy competitive pricing with no hidden fees. Get the best value for your money without compromising on quality.",
    },
    {
        icon: <FaMouse className="text-3xl " />,
        title: "Easy Booking Process",
        description: "Our intuitive platform ensures a seamless booking experience. Reserve your car in just a few clicks, anytime, anywhere.",
    },
    {
        icon: <FaPhoneAlt className="text-3xl" />,
        title: "Customer Support",
        description: "We’ve got you covered 24/7. Reach out to our friendly support team for assistance whenever you need it.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="py-12 my-10 bg-white text-center w-11/12 md:w-10/12 mx-auto ">
            <h2 className="text-4xl font-bold text-gray-800 mb-10">Why Choose Us?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <motion.div
                       
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.8 }}
                        onHoverStart={() => console.log('hover started!')}
                        key={index}
                        className="bg-gradient-to-b from-blue-400 to-blue-300 text-black p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 "
                    >
                        <div className="w-12 h-12 rounded-full bg-white mx-auto flex items-center justify-center mb-4">
                            {feature.icon}
                        </div>
                        <h3 className="font-semibold text-lg">{feature.title}</h3>
                        <div className="w-8 h-1 bg-white mx-auto my-2"></div>
                        <p className="text-sm text-black">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default WhyChooseUs;
