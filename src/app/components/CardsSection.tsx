"use client";
import CardLayoutItem from '@/app/components/CardLayoutItem';
import productListData from '@/app/ProductList/productlist.json';
import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

const CardSection = () => {
  const ref = useRef(null); 
  const isInView = useInView(ref)

  return (
    <>
    <motion.div
      ref={ref} 
      className='text-5xl font-bold text-center p-4 text-stone-900'
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