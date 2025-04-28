import React from "react";

export default function CardDescriptionPage({params}: {params: {id: string}}
) {
  const { id } = params;
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Card Description Page: {id}</h1>
      <p className="text-lg text-gray-700">This is the card description page.</p>
    </div>
  );  
}
                                             
