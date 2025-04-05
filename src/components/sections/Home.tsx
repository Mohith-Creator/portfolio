import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import AnimatedCube from "../AnimatedCube";

const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <AnimatedCube />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            Mohith Reddy
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
            MERN Stack Developer
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-indigo-600 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:bg-indigo-700 transition-colors duration-300"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Let's Connect
          </motion.button>
        </motion.div>
      </div>
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <ChevronDown size={32} className="text-gray-400" />
      </motion.div>
    </section>
  );
};

export default Home;
