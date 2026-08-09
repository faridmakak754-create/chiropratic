import React from "react";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">

      {/* Image */}
      <div className="relative h-52 overflow-hidden">

        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent"></div>

      </div>


      {/* Content */}
      <div className="p-5">

        <h3 className="text-xl font-bold text-slate-800">
          {title}
        </h3>

        <p className="mt-3 text-sm text-slate-500 leading-6">
          {description}
        </p>

        {/* Treatment label */}
        <div className="mt-5 pt-4 border-t border-slate-100">

          <span className="text-xs font-semibold uppercase tracking-wide text-teal-700">
            Chiropractic Treatment
          </span>

        </div>

      </div>

    </div>
  );
};

export default ServiceCard;