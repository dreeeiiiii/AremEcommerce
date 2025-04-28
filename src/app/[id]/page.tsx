"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Spinner from "@/components/LoadingSpinner/page";

interface BusinessProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  children?: BusinessProduct[];
}

export default function ProductChildrenPage() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState<BusinessProduct | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("data/productlist.json"); // Fetch data from the JSON
      const data: BusinessProduct[] = await response.json();
      const foundProduct = data.find(
        (product) => product.id === parseInt(id as string, 10) // Find the product based on ID
      );
      setProduct(foundProduct || null);
      setLoading(false);
    };
    fetchProducts();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        Product not found.
      </div>
    );
  }

  if (!product.children || product.children.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500">
        No children found for this product.
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-semibold mb-6">Children for {product.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {product.children.map((child) => (
          <div
            key={child.id}
            className="bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 ease-in-out hover:scale-105"
          >
            <img
              src={child.imageUrl}
              alt={child.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-bold mb-2">{child.name}</h2>
            <p className="text-gray-600">{child.description}</p>
            <p className="text-lg font-semibold text-gray-900">${child.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
