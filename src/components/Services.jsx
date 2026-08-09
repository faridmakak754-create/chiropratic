import React from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const treatments = [
    {
      id: 1,
      title: "Migraine",
      description:
        "Chiropractic care focused on supporting patients experiencing migraine-related discomfort.",
      image:
        "migraine.jpeg",
    },
    {
      id: 2,
      title: "Neck Pain",
      description:
        "Care focused on improving neck mobility and helping manage neck discomfort.",
      image:
        "neckPain.jpeg",
    },
    {
      id: 3,
      title: "Frozen Shoulder",
      description:
        "Supportive treatment for shoulder stiffness, restricted movement and discomfort.",
      image:
        "Frozen.jpeg",
    },
    {
      id: 4,
      title: "Tennis Elbow",
      description:
        "Targeted care for elbow discomfort with a focus on supporting movement and function.",
      image:
        "Tennis.jpeg",
    },
   
  ];



  return (
    <section className="py-20 bg-slate-50">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">

          <span className="inline-block px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-semibold mb-4">
            Our Treatments
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Specialized Treatment for
            <span className="text-teal-700"> Your Needs</span>
          </h2>

          <p className="mt-4 text-slate-500 leading-7">
            Personalized chiropractic care for a range of
            musculoskeletal conditions and movement-related concerns.
          </p>

        </div>


        {/* 4 Featured Treatments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {treatments.map((treatment) => (
            <ServiceCard
              key={treatment.id}
              image={treatment.image}
              title={treatment.title}
              description={treatment.description}
            />
          ))}

        </div>


        {/* View All */}
        <div className="flex justify-center mt-10">

          <Link
            to="/treatments"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-teal-600 text-teal-700 font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300"
          >
            View All Treatments
            <span>→</span>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default Services;