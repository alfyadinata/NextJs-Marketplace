import Image from "next/image";
import { ShoppingCart, Heart } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Apple iPhone 14",
    price: "$799",
    imageUrl:
      "https://images.tokopedia.net/img/cache/700/OJWluG/2023/1/17/845a2bef-a7a3-403e-8841-e4c16f9162da.jpg",
  },
  {
    id: 2,
    name: "Samsung Galaxy S23",
    price: "$999",
    imageUrl:
      "https://images.tokopedia.net/img/cache/700/VqbcmM/2023/12/7/01713dfe-bff3-497b-8a23-85a4e5f622b3.jpg",
  },
  {
    id: 3,
    name: "Sony WH-1000XM5 Headphones",
    price: "$349",
    imageUrl:
      "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/3/1/b7f4d88e-2ded-4ac7-9307-5c7f5151da30.jpg",
  },
  {
    id: 4,
    name: "MacBook Pro 16-inch",
    price: "$2499",
    imageUrl:
      "https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/21/535428f9-3d82-434c-8836-95c7c41e0c46.jpg",
  },
  {
    id: 5,
    name: "MacBook Pro 16-inch",
    price: "$1899",
    imageUrl:
      "https://images.tokopedia.net/img/cache/700/OJWluG/2022/3/21/535428f9-3d82-434c-8836-95c7c41e0c46.jpg",
  },
];

const ProductGrid = () => {
  return (
    <section id="shop" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
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
                <p className="text-xl font-bold text-indigo-600 mb-4">
                  {product.price}
                </p>
                <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-200 flex items-center justify-center">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
