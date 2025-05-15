import React from "react";

export default function Hero() {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            What the Buddha Taught
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Visualizing the profound teachings of the Buddha using modern tools
            and timeless wisdom.
          </p>
          <a
            href="/explore"
            className="inline-block bg-yellow-500 text-white text-lg font-semibold py-3 px-6 rounded-full hover:bg-yellow-600 transition">
            Explore Teachings
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src="src/assets/HeroSectionImage.png"
            alt="Visualization of Buddha's teachings"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
