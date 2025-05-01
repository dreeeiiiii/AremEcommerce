"use client";

import React, { useState } from "react";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    contact: "",
    paymentMethod: "COD",
    notes: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Checkout Data:", form);
    alert("Order submitted! ✅");
    // You can now send this data to your backend or database
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center text-stone-800">🛒 Checkout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-stone-700 font-medium mb-1">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-stone-300"
            required
          />
        </div>

        <div>
          <label className="block text-stone-700 font-medium mb-1">Address</label>
          <input
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-stone-300"
            required
          />
        </div>

        <div>
          <label className="block text-stone-700 font-medium mb-1">Contact Number</label>
          <input
            type="tel"
            name="contact"
            value={form.contact}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-stone-300"
            required
          />
        </div>

        <div>
          <label className="block text-stone-700 font-medium mb-1">Payment Method</label>
          <select
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-stone-300"
            required
          >
            <option value="COD">Cash on Delivery</option>
            <option value="GCASH">GCash</option>
            <option value="MAYA">Maya</option>
            <option value="BANK">Bank Transfer</option>
            <option value="CARD">Credit/Debit Card</option>
          </select>
        </div>

        <div>
          <label className="block text-stone-700 font-medium mb-1">Notes (Optional)</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows={3}
            className="w-full border border-gray-300 p-2 rounded-md focus:ring focus:ring-stone-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-stone-900 text-white py-3 rounded-md hover:bg-stone-700 transition"
        >
          Confirm Order
        </button>
      </form>
    </div>
  );
}
