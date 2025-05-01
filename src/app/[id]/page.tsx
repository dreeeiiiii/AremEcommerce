"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Spinner from "../../components/LoadingSpinner/page";

interface BusinessProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  children?: BusinessProduct[];
}

export default function ProductChildrenPage() {
  const router = useRouter();
  const { id } = useParams(); 
  const [product, setProduct] = useState<BusinessProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("data/productlist.json"); // Adjust path to your JSON file if needed
      const data: BusinessProduct[] = await response.json();
      const foundProduct = data.find(
        (product) => product.id  === parseInt(id as string, 10) 
);
      setProduct(foundProduct || null);
      setLoading(false);
    };

    fetchProducts();
  }, [id]); // Dependency array includes id to refetch when ID changes

  if (loading) {
    return <Spinner />; // Loading spinner while data is being fetched
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Product not found.
      </div>
    );
  }

  // Ensure there are child products to display
  if (!product.children || product.children.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        No children found for this product.
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-6 md:p-8">
       <button
        onClick={() => router.back()}
        className="mb-6 px-4 py-2 text-stone-600 hover:text-stone-800 transition"
      >
        ← Back
      </button>

      <h1 className="text-2xl sm:text-3xl font-semibold mb-6">{product.name}</h1>
  
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-7 overflow-hidden display-webkit ellipsis">
    {product.children.map((child) => (
      <div
        key={child.id}
        onClick={() => router.push(`/${product.id}/${child.id}`)}
        className="bg-white shadow-lg rounded-xl p-4 sm:p-6 transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer"
      >
        <img
          src={child.imageUrl}
          alt={child.name}
          className="w-full h-40 sm:h-48 object-cover rounded-md mb-4"
        />
        <h2 className="text-lg sm:text-xl font-bold mb-2">{child.name}</h2>
        <p className="text-gray-600 text-sm sm:text-base mb-2">
            {child.description.split(" ").slice(0, 20).join(" ")}...
        </p>

        <p className="text-base sm:text-lg font-semibold text-gray-900">₱ {child.price}</p>
      </div>
    ))}
  </div>
</div>

  );
}
