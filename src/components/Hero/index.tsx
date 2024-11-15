import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Scroll } from "lucide-react";

export default function EcommerceBanner() {
  return (
    <div className="w-full bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-12 lg:p-16 flex flex-col items-center justify-center min-h-[400px] relative overflow-hidden mt-[10vh]">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=800')] opacity-10 bg-cover bg-center" />
      <Scroll className="w-16 h-16 mb-6 text-amber-500" />
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 relative z-10">
        Discover the Legends, Kings, and Icons That Shaped History
      </h1>
      <p className="text-lg md:text-xl text-center mb-8 max-w-3xl relative z-10">
        Explore Our Exclusive Collection of eBooks on Great Leaders, Empires,
        and Lives That Changed the World.
      </p>
      <Button className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold py-3 px-6 rounded-full text-lg transition-colors duration-300 relative z-10">
        Start Your Journey
      </Button>
    </div>
  );
}
