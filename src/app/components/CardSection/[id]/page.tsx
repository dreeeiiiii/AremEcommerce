import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';

type Product = {
  id: string;  // Assuming the product ID is a string in your product list
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default async function ProductDetail({ params }: { params: { id: string } }) {
  // Read product data from the public folder
  const filePath = path.join(process.cwd(), 'public', 'data', 'productlist.json');
  const fileContents = await fs.readFile(filePath, 'utf-8');
  const products: Product[] = JSON.parse(fileContents);

  // Find the product by ID
  const product = products.find((p) => p.id === params.id);

  if (!product) return notFound();

  return (
    <div className="p-6 bg-white shadow rounded max-w-2xl mx-auto">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-full rounded-xl mb-4"
      />
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="mt-2 text-gray-700">{product.description}</p>
      <p className="mt-4 text-xl text-green-600">${product.price.toFixed(2)}</p>
    </div>
  );
}
