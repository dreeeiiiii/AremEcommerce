import React from 'react'

const Footer = () => {
  return (
    <div className='flex bg-stone-950 text-white items-center '>
        <div className='flex-col sm:flex-row md:flex-1/4 flex p-3   '>
            <div className='flex-2'>
                <p className='text-2xl'>Customer Service</p>
                <ul className='text-sm cursor-pointer'>
                    <li className=' hover:text-stone-600'>Help center</li>
                    <li className=' hover:text-stone-600'>Free Shipping</li>
                    <li className=' hover:text-stone-600'>Contact Us</li>
                    <li className=' hover:text-stone-600'>Payment Methods</li>
                    <li className=' hover:text-stone-600'>Return and Refund</li>
                </ul>
            </div>
            <div className='flex-2'>
                <p className='text-2xl'>About AREM</p>
                <ul className='text-sm'>
                    <li className=' hover:text-stone-600'>About Us</li>
                    <li className=' hover:text-stone-600'>AREM Policies</li>
                    <li className=' hover:text-stone-600'>Flash Deals</li>
                    <li className=' hover:text-stone-600'>Sales</li>
                    <li className=' hover:text-stone-600'>Media Contact</li>
                </ul>
            </div>
            <div className='flex-2'>
                <p className='text-2xl'>Follow Us</p>
                <ul className='text-sm cursor-pointer'>
                    <li className=' hover:text-stone-600'>Facebook</li>
                    <li className=' hover:text-stone-600'>Instagram</li>
                    <li className=' hover:text-stone-600'>Twitter</li>
                </ul>
            </div>
            <div className='flex-2'>
               <p className='text-2xl'> Payment</p>
               <ul className='text-sm cursor-pointer'>
                    <li className=' hover:text-stone-600'>Gcash</li>
                    <li className=' hover:text-stone-600'>Paymaya</li>
                    <li className=' hover:text-stone-600'>Cash On Delivery</li>
                  
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer