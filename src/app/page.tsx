'use client';

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion"; 
import { useRouter } from 'next/navigation';

function Page() {
  const refH1 = useRef(null);
  const refP = useRef(null);
  const refButton = useRef(null);
  const refServices = useRef(null);

  const isH1InView = useInView(refH1);
  const isPInView = useInView(refP);
  const isButtonInView = useInView(refButton);
  const isServicesInView = useInView(refServices);

  interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl: string;
  }

  const [productListData, setProductListData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/productlist.json'); // Adjust path to your JSON file if needed
      const data = await response.json();
      setProductListData(data);
    };

    fetchData();
  }, []);

  const router = useRouter();

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
            ref={refH1}
            initial={{ opacity: 0, y: 50 }}
            animate={isH1InView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            Welcome to AREM Printing Services
          </motion.h1>

          <motion.p
            className="text-white text-lg mb-8"
            ref={refP}
            initial={{ opacity: 0 }}
            animate={isPInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Discover the best products for you
          </motion.p>

          <motion.button
            className="bg-stone-100 text-stone-950 px-6 py-3 rounded-lg hover:bg-stone-700 transition duration-300"
            ref={refButton}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isButtonInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 1, duration: 0.5 }}
          >
            Shop Now
          </motion.button>
        </div>
      </div>

      <motion.div
        ref={refServices}
        className="text-5xl font-bold text-center p-4 text-stone-900 my-6"
        initial={{ opacity: 0, y: 50 }}
        animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        OUR SERVICES
      </motion.div>



<div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {productListData.map((product) => (

      <motion.div
      key={product.id}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}  
      onClick={() => router.push(`${product.id}`)} // Redirect to the children's page
      >
       
       <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
          <p className="text-gray-500">{product.description}</p>
          <p className="text-lg font-bold mt-4">${product.price}</p>
          
      </motion.div>
      ))}
    </div>
    </>
  );
}

export default Page;
