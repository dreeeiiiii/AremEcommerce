"use client";
import React, {useRef} from "react";
import { motion, useInView } from "framer-motion"; 


const FrontCoverPage = () => {

  const ref = useRef(null);
  const isInView = useInView(ref)
  return (

    <>
      <div
        className="flex flex-col justify-center items-center h-screen bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/1440504/pexels-photo-1440504.jpeg?auto=compress&cs=tinysrgb&w=600')",
        }}
      >

        <div className="flex justify-center items-center flex-col text-center bg-opacity-50 p-8 rounded-lg shadow-lg">
        <motion.h1
          className="text-white text-6xl font-bold mb-4"
          ref={ref}
          initial={{ opacity: 0, y: 50 }} 
          animate={isInView ? { opacity: 1, y: 0 }:{}} 
          transition={{ duration: 0.5 }} 
        >
          Welcome to AREM Printing Services
        </motion.h1>

        <motion.p
          className="text-white text-lg mb-8"
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView? { opacity: 1 }:{}}
          transition={{ delay: 0.5, duration: 1 }} 
        >
          Discover the best products for you
        </motion.p>

      
        <motion.button
          className="bg-stone-100 text-stone-950 px-6 py-3 rounded-lg hover:bg-stone-700 transition duration-300"
          ref={ref}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView?{ opacity: 1, scale: 1 }:{}}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Shop Now
        </motion.button>
        </div>
      </div>
    </>
  );
};

export default FrontCoverPage;