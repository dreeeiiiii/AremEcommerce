import React from "react";

const Footer = () => {
  return (
    <footer className="bg-stone-950 text-white py-10 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
        {/* Customer Service */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-stone-400 cursor-pointer">Help Center</li>
            <li className="hover:text-stone-400 cursor-pointer">Free Shipping</li>
            <li className="hover:text-stone-400 cursor-pointer">Contact Us</li>
            <li className="hover:text-stone-400 cursor-pointer">Payment Methods</li>
            <li className="hover:text-stone-400 cursor-pointer">Return & Refund</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About AREM</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-stone-400 cursor-pointer">About Us</li>
            <li className="hover:text-stone-400 cursor-pointer">AREM Policies</li>
            <li className="hover:text-stone-400 cursor-pointer">Flash Deals</li>
            <li className="hover:text-stone-400 cursor-pointer">Sales</li>
            <li className="hover:text-stone-400 cursor-pointer">Media Contact</li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-stone-400 cursor-pointer">Facebook</li>
            <li className="hover:text-stone-400 cursor-pointer">Instagram</li>
            <li className="hover:text-stone-400 cursor-pointer">Twitter</li>
          </ul>
        </div>

        {/* Payment */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Payment</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="hover:text-stone-400 cursor-pointer">Gcash</li>
            <li className="hover:text-stone-400 cursor-pointer">Paymaya</li>
            <li className="hover:text-stone-400 cursor-pointer">Cash On Delivery</li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} AREM. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;