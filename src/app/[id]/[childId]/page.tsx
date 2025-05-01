"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Spinner from "../../../components/LoadingSpinner/page";

interface BusinessProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  children?: BusinessProduct[];
}

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
}

export default function ChildDetailPage() {
  const { id, childId } = useParams();
  const router = useRouter();
  const [childProduct, setChildProduct] = useState<BusinessProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newReview, setNewReview] = useState({ rating: 5, comment: "" });
  const [isSubmittingReview, setIsSubmittingReview] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("/data/productlist.json");
      const data: BusinessProduct[] = await response.json();

      const parentProduct = data.find(
        (item) => item.id === parseInt(id as string, 10)
      );

      const foundChild = parentProduct?.children?.find(
        (child) => child.id === parseInt(childId as string, 10)
      );

      setChildProduct(foundChild || null);
      setLoading(false);
    };

    fetchProduct();
  }, [id, childId]);

  useEffect(() => {
    if (childProduct) {
      const mockReviews: Review[] = [
        { id: 1, name: "Alice", rating: 5, comment: "Amazing product!" },
        { id: 2, name: "Bob", rating: 4, comment: "Good value for the price." }
      ];
      setReviews(mockReviews);
    }
  }, [childProduct]);

  const handleReviewChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewReview((prevReview) => ({
      ...prevReview,
      [e.target.name]: e.target.value
    }));
  };

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingReview(true);

    setTimeout(() => {
      setReviews((prevReviews) => [
        ...prevReviews,
        { id: prevReviews.length + 1, name: "Anonymous", ...newReview }
      ]);
      setNewReview({ rating: 5, comment: "" });
      setIsSubmittingReview(false);
    }, 1000);
  };

  const handleBuyNow = () => {
    alert(`Redirecting to checkout for ${childProduct?.name} (₱${childProduct?.price})`);
    router.push("/checkout");
  };

  const handleAddToCart = () => {
    const storedCart = localStorage.getItem("cart");
    const cartItems = storedCart ? JSON.parse(storedCart) : [];

    const existingItemIndex = cartItems.findIndex((item: BusinessProduct) => item.id === childProduct?.id);

    if (existingItemIndex >= 0) {
      cartItems[existingItemIndex].quantity += 1;
    } else {
      cartItems.push({ ...childProduct, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));

    alert(`${childProduct?.name} has been added to your cart.`);
    router.push("/Cart");
  };

  if (loading) return <Spinner />;

  if (!childProduct) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Child product not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* 🖼️ Product Image and Details */}
        <div className="lg:col-span- flex flex-col items-center lg:items-start bg-white p-6 rounded-xl shadow-lg space-y-6">
          <img
            src={childProduct.imageUrl}
            alt={`Image of ${childProduct.name}`}
            className="w-full lg:w-96 h-96 object-cover rounded-lg shadow-md mb-10"
          />
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{childProduct.name}</h1>
          <p className="text-gray-600 mb-6 text-center lg:text-left">{childProduct.description}</p>
          <p className="text-xl font-semibold text-gray-900 mb-6">₱ {childProduct.price}</p>

          <div className="flex space-x-4 mt-4 w-full">
            <button
              onClick={handleAddToCart}
              className="flex-1 lg:flex-none px-6 py-3 bg-gray-800 text-white rounded-md shadow-md hover:bg-gray-900 transition"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="flex-1 lg:flex-none px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
            >
              Buy Now
            </button>
          </div>
        </div>

        {/* 📄 Product Reviews and Feedback */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-lg space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Customer Reviews</h2>
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="p-4 bg-gray-100 rounded-md shadow-sm">
                <p className="text-lg font-medium">{review.name} - {review.rating}★</p>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>

          {/* Add Review Form */}
          <form onSubmit={handleReviewSubmit} className="space-y-4">
            <h3 className="text-lg font-medium text-gray-800">Leave a Review</h3>
            <div className="mb-4">
              <label htmlFor="rating" className="block text-gray-600">Rating (1-5):</label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={newReview.rating}
                onChange={handleReviewChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                min={1}
                max={5}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="block text-gray-600">Comment:</label>
              <textarea
                id="comment"
                name="comment"
                value={newReview.comment}
                onChange={handleReviewChange}
                className="w-full p-2 border border-gray-300 rounded-md"
                rows={4}
              />
            </div>
            <button
              type="submit"
              disabled={isSubmittingReview}
              className={`px-6 py-3 bg-green-600 text-white rounded-md shadow-md hover:bg-green-700 transition w-full lg:w-auto ${
                isSubmittingReview ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmittingReview ? "Submitting..." : "Submit Review"}
            </button>
          </form>
        </div>
      </div>

      {/* 🛍️ Payment Section */}
      <div className="mt-12 bg-white p-6 rounded-xl shadow-lg max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-800">Payment Details</h2>
        <div className="mt-4">
          <p className="text-lg text-gray-800">Please confirm your order and proceed to payment.</p>
          <div className="mt-4">
            <p className="font-medium">Product: {childProduct.name}</p>
            <p className="text-lg">Price: ₱ {childProduct.price}</p>
          </div>
          <button
            onClick={handleBuyNow}
            className="mt-4 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Confirm and Pay
          </button>
        </div>
      </div>
    </div>
  );
}
