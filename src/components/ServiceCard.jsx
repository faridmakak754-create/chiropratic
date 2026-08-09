import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300">
      
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-3 ">
          {title}
        </h3>

        <p className="text-slate-500 text-sm leading-6 mb-5 line-clamp-3">
          {description}
        </p>

        <button className="inline-flex items-center gap-2 text-teal-700 font-semibold text-sm group-hover:gap-3 transition-all duration-300">
          Learn More
          <FaArrowRight size={13} />
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;