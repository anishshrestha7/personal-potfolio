import React from 'react';
import { motion } from 'framer-motion';

const HeroImage = () => {
  return (
    <motion.div
      className="flex-1 w-full max-w-[300px] md:max-w-[400px] mx-auto md:mx-0 flex justify-center items-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="hero-jelly-shape relative w-full aspect-square border-[8px] border-customBorder overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(255,255,255,0.05)]">
        <img 
          src="/profile.jpg" 
          alt="Anish Shrestha" 
          className="w-full h-full object-cover scale-110" 
        />
      </div>
    </motion.div>
  );
};

export default HeroImage;
