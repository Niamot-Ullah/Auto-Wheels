import { motion } from 'motion/react';

const offers = [
  {
    title: "Get 15% off on weekend rentals for a limited time and enjoy!",
    description: "Book now for a weekend getaway and save big. Limited time offer!",
  },
  {
    title: "Luxury cars at $99/day this holiday season!",
    description: "Drive in style this holiday season. Exclusive offer for a limited time.",
  },
  {
    title: "Special Offer: Free upgrade on all rentals!",
    description: "Get a free upgrade when you book any vehicle this month. Don’t miss out!",
  },
  {
    title: "Early bird offer: Save 20% on your next rental!",
    description: "Plan ahead and save big. Book early to enjoy this exclusive discount.",
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-12 bg-white text-center w-11/12 md:w-10/12 mx-auto ">
      <h2 className="text-4xl font-bold text-gray-800 mb-10">SPECIAL OFFERS</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  max-w-7xl mx-auto">
        {offers.map((offer, index) => (
          <motion.div
           
            transition={{ duration: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.1 }}
            onHoverStart={() => console.log('hover started!')}
            key={index}
            className="bg-gradient-to-r from-gray-400 to-gray-600 text-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
          >
            <h3 className="font-semibold text-lg mb-2">{offer.title}</h3>
            <p className="text-sm">{offer.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
