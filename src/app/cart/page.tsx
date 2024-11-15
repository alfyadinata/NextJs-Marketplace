"use client";
import React, { useState } from "react";
import { FaTrash, FaPlusCircle, FaMinusCircle } from "react-icons/fa";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 3,
      name: "Majapahit dalam Sejarah: Kejayaan yang Abadi",
      price: 97500,
      image: "/img/cover/majapahit.png",
      quantity: 1,
    },
    {
      id: 4,
      name: "Takhta Para Dewa: Rahasia Olympus",
      price: 150000,
      image: "/img/cover/olympus.png",
      quantity: 1,
    },
  ]);

  const incrementQuantity = (itemId: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (itemId: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeItem = (itemId: number) => {
    setCartItems((items) => items.filter((item) => item.id !== itemId));
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-32">
      <h1 className="text-3xl font-bold mb-4">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="bg-white shadow-lg rounded-lg p-4 mb-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-bold">{item.name}</h2>
                  <p className="text-gray-700">
                    Rp {item.price.toLocaleString()}
                  </p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => decrementQuantity(item.id)}
                      className="text-amber-700 hover:text-amber-900 transition"
                    >
                      <FaMinusCircle size={20} />
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => incrementQuantity(item.id)}
                      className="text-amber-700 hover:text-amber-900 transition"
                    >
                      <FaPlusCircle size={20} />
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <p className="text-lg font-bold">
                    Rp {(item.price * item.quantity).toLocaleString()}
                  </p>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:text-red-800 transition"
                  >
                    <FaTrash size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
            <div className="flex justify-between mb-2">
              <p className="text-gray-700">Subtotal</p>
              <p className="font-bold">
                Rp {calculateTotal().toLocaleString()}
              </p>
            </div>
            <div className="flex justify-between mb-2">
              <p className="text-gray-700">Shipping</p>
              <p className="font-bold">Rp 15,000</p>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-2">
              <p>Total</p>
              <p>Rp {(calculateTotal() + 15000).toLocaleString()}</p>
            </div>
            <button className="mt-6 w-full bg-amber-700 text-white py-2 rounded-lg hover:bg-amber-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
