"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Minus, Plus, ShoppingCart } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
  description: string;
  rating: number;
  stock: number;
  specs: { [key: string]: string };
}

export default function ProductDetail() {
  const product: Product = {
    id: 5,
    name: "MacBook Pro 16-inch",
    price: "$1899",
    imageUrl:
      "https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/21/535428f9-3d82-434c-8836-95c7c41e0c46.jpg",
    description:
      "The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life.",
    rating: 4.8,
    stock: 50,
    specs: {
      Processor: "Apple M1 Pro or M1 Max chip",
      RAM: "Up to 64GB",
      Storage: "Up to 8TB SSD",
      Display: "16-inch Liquid Retina XDR display",
      Battery: "Up to 21 hours",
    },
  };

  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState("");

  const handleQuantityChange = (value: number) => {
    if (value >= 1 && value <= product.stock) {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    setNotification(`${quantity} x ${product.name} added to your cart.`);
    setTimeout(() => setNotification(""), 3000); // Clear notification after 3 seconds
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-[15vh]">
      {notification && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
          {notification}
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={product.imageUrl}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">({product.rating})</span>
            </div>
            <p className="text-2xl font-bold text-blue-600 mb-4">
              {product.price}
            </p>
            <p className="text-gray-600 mb-6">{product.description}</p>
            <div className="mb-6">
              <h2 className="text-lg font-semibold mb-2">Specifications:</h2>
              <ul className="list-disc list-inside">
                {Object.entries(product.specs).map(([key, value]) => (
                  <li key={key} className="text-gray-600">
                    <span className="font-medium">{key}:</span> {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <div className="flex items-center mb-4">
              <span className="mr-2">Quantity:</span>
              <button
                className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-l"
                onClick={() => handleQuantityChange(quantity - 1)}
                disabled={quantity <= 1}
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="number"
                min="1"
                max={product.stock}
                value={quantity}
                onChange={(e) => handleQuantityChange(parseInt(e.target.value))}
                className="w-16 text-center border-t border-b border-gray-200"
              />
              <button
                className="bg-gray-200 text-gray-600 hover:bg-gray-300 px-2 py-1 rounded-r"
                onClick={() => handleQuantityChange(quantity + 1)}
                disabled={quantity >= product.stock}
              >
                <Plus className="h-4 w-4" />
              </button>
              <span className="ml-4 text-gray-600">
                {product.stock} available
              </span>
            </div>
            <button
              onClick={handleAddToCart}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
            >
              <ShoppingCart className="inline-block mr-2 h-5 w-5" /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
