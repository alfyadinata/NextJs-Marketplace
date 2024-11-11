const Hero = () => {
  return (
    <section
      className="bg-cover bg-center mt-20"
      style={{
        backgroundImage:
          "url('https://images.tokopedia.net/blog-tokopedia-com/uploads/2017/08/Banner-Blog-Seller-Center-1200x630.jpg')",
      }}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 text-center  rounded-lg">
        <h1 className="text-4xl font-extrabold text-white">
          Welcome to Our Shop
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Discover the latest trends in fashion, electronics, and more!
        </p>
        <div className="mt-8">
          <span className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700">
            Shop Now
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
