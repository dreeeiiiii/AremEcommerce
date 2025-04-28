"use client";
import CardLayoutItem from '@/app/components/CardSection/CardLayoutItem';
import { motion, useInView } from 'framer-motion';
import React, { useRef, useEffect, useState } from 'react';

const CardSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [productListData, setProductListData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/data/productlist.json'); // Fetch from public directory
      const data = await response.json();
      setProductListData(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <motion.div
        ref={ref}
        className="text-5xl font-bold text-center p-4 text-stone-900"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        OUR SERVICES
      </motion.div>

      <CardLayoutItem products={productListData} />
    </>
  );
};

export default CardSection;