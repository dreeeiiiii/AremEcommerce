"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface CartItem {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
}

const paymentMethods = ["GCash", "Credit Card", "Cash on Delivery"] as const;
type PaymentMethod = typeof paymentMethods[number];

const dummyReviews = [
  { name: "John", rating: 5, comment: "Excellent product!" },
  { name: "Jane", rating: 4, comment: "Very useful and affordable." },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("GCash");
  const [feedback, setFeedback] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTotalPrice(total - discount);
  }, [cartItems, discount]);

  const handleQuantityChange = (id: number, quantity: number) => {
    const updatedCart = cartItems.map(item =>
      item.id === id ? { ...item, quantity } : item
    );
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id: number) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleApplyPromo = () => {
    if (promoCode === "DISCOUNT10") {
      setDiscount(100);
      alert("₱100 discount applied!");
    } else {
      alert("Invalid promo code.");
    }
  };

  const handleCheckout = () => {
    alert(`Proceeding to ${paymentMethod} payment...`);
    router.push("/CheckOut");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <button
        onClick={() => router.push('/')}
        className="mb-6 px-4 py-2 text-stone-600 hover:text-stone-800 transition"
      >
        ← Back
      </button>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* 🛒 Cart Items */}
        <div className="lg:col-span-2 bg-white p-4 md:p-6 rounded-xl shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Shopping Cart</h1>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="grid grid-cols-1 sm:grid-cols-6 gap-4 items-center border-b pb-4">
                  <img src={item.imageUrl} alt={item.name} className="w-full sm:w-20 h-20 rounded-md object-cover col-span-1" />
                  <div className="col-span-4">
                    <h2 className="font-semibold text-lg">{item.name}</h2>
                    <p className="text-gray-600">₱ {item.price}</p>
                    <input
                      type="number"
                      min={1}
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                      className="w-full sm:w-24 mt-2 p-2 border rounded-md"
                    />
                  </div>
                  <button
                    onClick={() => handleRemoveItem(item.id)}
                    className="text-red-600 hover:text-red-800 text-left sm:text-right"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 📦 Order Summary + Payment */}
        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg space-y-6">
          <div>
            <h2 className="text-xl md:text-2xl font-bold mb-2">Order Summary</h2>
            <p className="text-gray-700">Items Total: ₱{totalPrice.toFixed(1) + discount}</p>
            <p className="text-green-600">Discount: -₱{discount}</p>
            <h3 className="text-lg md:text-xl font-semibold mt-2">Total: ₱{totalPrice.toFixed(2)}</h3>
          </div>

          <div>
            <label className="block font-semibold mb-2">Promo Code</label>
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                placeholder="Enter code"
                className="flex-1 p-2 border rounded-md"
              />
              <button onClick={handleApplyPromo} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
                Apply
              </button>
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-2">Payment Method</label>
            <div className="space-y-2">
              {paymentMethods.map(method => (
                <label key={method} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="payment"
                    value={method}
                    checked={paymentMethod === method}
                    onChange={() => setPaymentMethod(method)}
                  />
                  <span>{method}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={handleCheckout}
            className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
          >
            Proceed to {paymentMethod} Checkout
          </button>
        </div>

        {/* ⭐ Reviews */}
        <div className="lg:col-span-3 mt-6 bg-white p-4 md:p-6 rounded-xl shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-4">⭐ Customer Reviews</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {dummyReviews.map((review, index) => (
              <div key={index} className="border p-4 rounded-md">
                <p className="font-bold">{review.name}</p>
                <p className="text-yellow-500">{"⭐".repeat(review.rating)}</p>
                <p className="text-sm text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 💬 Feedback */}
        <div className="lg:col-span-3 mt-6 bg-white p-4 md:p-6 rounded-xl shadow-lg">
          <h2 className="text-xl md:text-2xl font-semibold mb-2">💬 Leave Feedback</h2>
          <textarea
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Share your experience..."
            className="w-full p-3 border rounded-md mb-4"
          />
          <button
            onClick={() => {
              alert("Thank you for your feedback!");
              setFeedback("");
            }}
            className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 w-full sm:w-auto"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
