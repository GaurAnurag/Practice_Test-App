import React from 'react';
import { motion } from 'framer-motion';
import bannerImage from '../../assets/images/3684.jpg';

const Banner = ({
  title = "Welcome to Educap Practice Test System",
  subtitle = "Learn. Practice. Achieve.",
  backgroundImage = bannerImage,
}) => {
  return (
    <div className="relative h-96 w-full">
      <img
        src={backgroundImage}
        alt="Educap Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <motion.h1
          className="font-bold text-4xl mb-3"
          style={{ fontFamily: 'cursive' }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
};

export default Banner;
