import React from "react";

const ContactCard = ({
  icon,
  title,
  description,
  actionText,
  href,
  external = false,
}) => {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group block bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-lg group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-2 font-bold text-slate-800">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-slate-500">
        {description}
      </p>

      {/* Action */}
      <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 group-hover:gap-3 group-hover:text-teal-900 transition-all duration-300">
        {actionText}
      </div>
    </a>
  );
};

export default ContactCard;