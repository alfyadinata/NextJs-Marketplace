/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaEye, FaCreditCard, FaTruck, FaTimes } from "react-icons/fa";

interface Transaction {
  id: number;
  date: string;
  items: {
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
  total: number;
  status: "Pending" | "Paid" | "Shipped" | "Delivered" | "Cancelled";
}

const TransactionPage: React.FC = () => {
  const transactions: Transaction[] = [
    {
      id: 1,
      date: "2024-09-01",
      items: [
        {
          name: "Warisan Rurik: Dinasti Viking yang Mewarnai Sejarah Rusia",
          price: 195000,
          image: "/img/cover/rurik.png",
          quantity: 1,
        },
        {
          name: "Valhalla dan Odin: Tempat Peristirahatan Prajurit Terhebat",
          price: 176000,
          image: "/img/cover/valhalla.png",
          quantity: 1,
        },
      ],
      total: 650000,
      status: "Pending",
    },
    {
      id: 2,
      date: "2024-08-28",
      items: [
        {
          name: "Ragnar Lothbrok: Legenda Viking yang Menggetarkan Dunia",
          price: 134000,
          image: "/img/cover/ragnar.png",
          quantity: 1,
        },
      ],
      total: 134000,
      status: "Paid",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 mt-32">
      <h1 className="text-3xl font-bold mb-4">My Transactions</h1>
      {transactions.length === 0 ? (
        <p>You have no transactions</p>
      ) : (
        transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="bg-white shadow-lg rounded-lg p-4 mb-6"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">
                  Transaction #{transaction.id}
                </p>
                <p className="text-gray-600">{transaction.date}</p>
              </div>
              <div
                className={`text-lg font-bold ${getStatusColor(
                  transaction.status
                )}`}
              >
                {transaction.status}
              </div>
            </div>
            <div className="mt-4">
              {transaction.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between py-2 border-b"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1 ml-4">
                    <h2 className="text-lg font-bold">{item.name}</h2>
                    <p className="text-gray-700">
                      {item.quantity} x Rp {item.price.toLocaleString()}
                    </p>
                  </div>
                  <p className="font-bold">
                    Rp {(item.quantity * item.price).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-xl font-bold">
                Total: Rp {transaction.total.toLocaleString()}
              </p>
              <div className="flex space-x-4">
                <button className="text-amber-600 hover:text-amber-800 transition">
                  <FaEye className="inline-block mr-2" /> View Details
                </button>
                {transaction.status === "Pending" && (
                  <button className="text-amber-600 hover:text-amber-800 transition">
                    <FaCreditCard className="inline-block mr-2" /> Pay Now
                  </button>
                )}
                {transaction.status === "Shipped" && (
                  <button className="text-amber-600 hover:text-amber-800 transition">
                    <FaTruck className="inline-block mr-2" /> Track Order
                  </button>
                )}
                {transaction.status === "Cancelled" && (
                  <button className="text-red-600 hover:text-red-800 transition">
                    <FaTimes className="inline-block mr-2" /> Remove
                  </button>
                )}
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

const getStatusColor = (status: string) => {
  switch (status) {
    case "Pending":
      return "text-yellow-500";
    case "Paid":
      return "text-amber-500";
    case "Shipped":
      return "text-amber-500";
    case "Delivered":
      return "text-amber-500";
    case "Cancelled":
      return "text-red-500";
    default:
      return "text-gray-500";
  }
};

export default TransactionPage;
