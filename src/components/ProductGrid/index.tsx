"use client";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import { formatRupiah } from "@/lib/utils";
import toast from "react-hot-toast";

const products = [
  {
    id: 1,
    name: "Alexander Sang Penakluk: Jalan Menuju Kekaisaran",
    price: 85000,
    imageUrl: "/img/cover/alexander.png",
  },
  {
    id: 2,
    name: "Æthelstan: Raja Pertama Inggris",
    price: 97500,
    imageUrl: "/img/cover/first-king-england.png",
  },
  {
    id: 3,
    name: "Majapahit dalam Sejarah: Kejayaan yang Abadi",
    price: 97500,
    imageUrl: "/img/cover/majapahit.png",
  },
  {
    id: 4,
    name: "Takhta Para Dewa: Rahasia Olympus",
    price: 150000,
    imageUrl: "/img/cover/olympus.png",
  },
  {
    id: 5,
    name: "Dari Cyrus ke Darius: Bangkit dan Jatuhnya Kekaisaran Persia",
    price: 134000,
    imageUrl: "/img/cover/persia.png",
  },
  {
    id: 6,
    name: "Ragnar Lothbrok: Legenda Viking yang Menggetarkan Dunia",
    price: 134000,
    imageUrl: "/img/cover/ragnar.png",
  },
  {
    id: 7,
    name: "Warisan Rurik: Dinasti Viking yang Mewarnai Sejarah Rusia",
    price: 195000,
    imageUrl: "/img/cover/rurik.png",
  },
  {
    id: 8,
    name: "Valhalla dan Odin: Tempat Peristirahatan Prajurit Terhebat",
    price: 176000,
    imageUrl: "/img/cover/valhalla.png",
  },
];

const ProductGrid = () => {
  return (
    <section id="shop" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our E-Books</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products
            .map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="relative">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={400}
                    layout="responsive"
                    objectFit="cover"
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xl font-bold text-amber-600 mb-4">
                    {formatRupiah(product.price)}
                  </p>
                  <button
                    className="w-full bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center"
                    onClick={() =>
                      toast.success("Berhasil ditambahkan ke Keranjang")
                    }
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Masukan ke Keranjang
                  </button>
                </div>
              </div>
            ))
            .reverse()}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
