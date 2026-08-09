import React from "react";

const WhyChooseCard = ({ icon, title, description }) => {
  return (
    <div className="group flex gap-5 px-5 py-2 bg-white rounded-2xl border border-slate-300 hover:shadow-lg hover:shadow-slate-300 transition-all duration-300">
      
      {/* Icon */}
      <div className="shrink-0">
        <div className="w-14 h-14 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-2xl group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1">
        <h3 className="text-lg font-bold text-slate-800 ">
          {title}
        </h3>

        <p className="text-sm text-slate-500 leading-5">
          {description}
        </p>
      </div>
    </div>
  );
};

export default WhyChooseCard;