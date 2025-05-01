"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission logic
    alert("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const faqs = [
    {
      question: "What services does Arem Printing offer?",
      answer: "We offer digital printing, offset printing, tarpaulin printing, personalized giveaways, and layout design services.",
    },
    {
      question: "How do I place an order?",
      answer: "You can place an order by contacting us via the form or visiting our shop directly. We also accept orders through social media or email.",
    },
    {
      question: "What is your usual turnaround time?",
      answer: "Most orders are processed within 2–5 business days, depending on quantity and complexity.",
    },
    {
      question: "Do you offer delivery services?",
      answer: "Yes, we deliver within select areas. Shipping fees may apply depending on your location.",
    },
    {
      question: "Can I request custom designs?",
      answer: "Absolutely! We have in-house graphic designers ready to bring your vision to life.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-md space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Send us a message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* FAQ Section */}
          <div className="bg-white p-6 rounded-xl shadow-md space-y-6">
            <h2 className="text-2xl font-semibold text-gray-700">Frequently Asked Questions</h2>
            {faqs.map((faq, index) => (
              <div key={index} className="border-b pb-4">
                <p className="font-medium text-gray-800">{faq.question}</p>
                <p className="text-gray-600 mt-1">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
