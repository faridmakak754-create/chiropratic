import React from "react";

const PageHero = ({ badge, title, highlight, description }) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-16 max-sm:py-12">

      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-600/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">

        <div className="max-w-3xl space-y-3">

          {/* Badge */}
          <span className="inline-block px-4 py-2 rounded-full bg-teal-500/10 border border-teal-400/20 text-teal-300 text-sm font-semibold ">
            {badge}
          </span>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight">
            {title}{" "}
            <span className="text-teal-300">
              {highlight}
            </span>
          </h1>

          {/* Description */}
          <p className=" text-slate-300 text-base md:text-lg leading-7 max-w-2xl">
            {description}
          </p>

        </div>

      </div>
    </section>
  );
};

export default PageHero;