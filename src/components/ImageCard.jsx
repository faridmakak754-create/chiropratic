import React, { useState } from "react";

const ImageCard = ({ image, title }) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      onClick={() => setFocused(!focused)}
      className="group relative h-72 overflow-hidden rounded-2xl bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
      />

      {/* Overlay */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-t from-slate-950/80 via-transparent to-transparent
          
          transition-opacity duration-300

          ${focused ? "opacity-100" : "opacity-0"}

          sm:opacity-0
          sm:group-hover:opacity-100
        `}
      />

      {/* Title */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 p-5
          transition-all duration-300

          ${focused
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-3"
          }

          sm:opacity-0
          sm:translate-y-3
          sm:group-hover:opacity-100
          sm:group-hover:translate-y-0
        `}
      >
        <h3 className="text-lg font-bold text-white">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default ImageCard;