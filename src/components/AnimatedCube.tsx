import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCube = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="relative w-full h-full">
        <motion.div
          className="absolute w-64 h-64 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 180, 270, 360],
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            top: '20%',
            left: '10%',
          }}
        />
        <motion.div
          className="absolute w-48 h-48 bg-gradient-to-tr from-blue-500/20 to-pink-500/20 rounded-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 270, 180, 90, 0],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{
            top: '50%',
            right: '15%',
          }}
        />
      </div>
    </div>
  );
};

export default AnimatedCube;