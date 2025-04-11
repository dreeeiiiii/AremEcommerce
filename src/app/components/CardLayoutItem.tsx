import { motion, useInView } from 'framer-motion';
import React,{useRef} from 'react'


  type Product = {
    id:number,
    name:string,
    description:string
    price: number,
    imageUrl:string,
  
  };


  interface ProductCard {
    products: Product[]
  }

const CardLayoutItem:React.FC<ProductCard> = ({products}) => {
  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <>
    
         <motion.div
            ref={ref} 
            className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 animation-fade-in'
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 1 }}
          >
          {products.map((product)=> (
            <div className='bg-stone-100 p-4 rounded-2xl shadow-lg hover:bg-stone-300' key={product.id} >
              <img src={product.imageUrl} 
                  alt="image"
                  className='object-cover rounded-2xl mb-4 w-full h-40' />
              <p className='text-2xl font-semibold'>{product.name}</p>
              <p>₱{product.price}</p>
              <p className='truncate'>{product.description}</p>
            </div>
          ))}
        </motion.div> 
    </>
  )

}

 
export default CardLayoutItem