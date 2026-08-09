import React from "react";

const AboutInfoCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl px-5 py-4 space-y-1 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300">
      
      <div className="w-14 h-14 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-2xl ">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-slate-800 ">
        {title}
      </h3>

      <p className="text-slate-500 leading-6 text-sm">
        {description}
      </p>

    </div>
  );
};

export default AboutInfoCard;