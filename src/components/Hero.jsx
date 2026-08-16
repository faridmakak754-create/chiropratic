import React, { useEffect, useState } from "react";

const Hero = () => {
  const images = [
    "/images/1.jpeg",
    "/images/4.jpeg",
    "/images/6.jpeg",
    "/images/7.jpeg",
    "/images/10.jpeg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  // Change image every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative min-h-150 max-md:min-h-120 max-sm:min-h-100 overflow-hidden">

      {/* ================= Background Images ================= */}
      <div className="absolute inset-0">

        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt="WM Amir Chiropractic Health Care"
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentImage === index
                ? "opacity-100"
                : "opacity-0"
            }`}
          />
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

   

      </div>


      {/* ================= Content ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-20 max-md:py-16 max-sm:py-10 text-center">

        <div className="flex flex-col items-center gap-6">

          {/* Badge */}
          <span className="bg-teal-500/15 border border-teal-300/30 px-5 py-2 rounded-full text-sm font-semibold shadow-sm text-teal-200 backdrop-blur-sm">
            Professional Chiropractic Care
          </span>


          {/* Heading */}
          <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-sm:leading-9">

            Restore Your{" "}
            <span className="text-teal-300">
              Health
            </span>

            <br />

            Improve Your{" "}
            <span className="text-blue-300">
              Movement
            </span>

          </h1>


          {/* Description */}
          <p className="max-w-2xl text-gray-200 text-base md:text-lg leading-7 max-sm:leading-6 ">
            Experience personalized chiropractic treatment designed
            to help manage discomfort, improve mobility, and support
            your physical well-being.
          </p>


          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 my-2 max-sm:my-1">

            <a
              href="/contact"
              className="bg-teal-500 px-6 py-3 max-sm:py-2 max-sm:px-5 rounded-full text-base font-semibold text-white shadow-lg hover:bg-teal-600 transition-all duration-300"
            >
              Contact Now
            </a>

            <a
              href="#location"
              className="border border-white/70 px-6 py-3 max-sm:py-2 max-sm:px-5 rounded-full text-base font-semibold text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Visit Us
            </a>

          </div>

        </div>

      </div>


      {/* ================= Slider Indicators ================= */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex gap-2">

        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            aria-label={`Show slide ${index + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              currentImage === index
                ? "w-8 bg-teal-400"
                : "w-2 bg-white/50 hover:bg-white"
            }`}
          />
        ))}

      </div>

    </section>
  );
};

export default Hero;