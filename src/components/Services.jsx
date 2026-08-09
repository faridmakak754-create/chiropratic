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
        "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Neck Pain",
      description:
        "Care focused on improving neck mobility and helping manage neck discomfort.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Frozen Shoulder",
      description:
        "Supportive treatment for shoulder stiffness, restricted movement and discomfort.",
      image:
        "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Tennis Elbow",
      description:
        "Targeted care for elbow discomfort with a focus on supporting movement and function.",
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Sciatica",
      description:
        "Personalized chiropractic care for lower-back and leg discomfort associated with sciatica.",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be5014f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Knee Pain",
      description:
        "Supportive treatment aimed at improving knee mobility and managing knee discomfort.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Back Pain",
      description:
        "Chiropractic care focused on back mobility and helping manage everyday back discomfort.",
      image:
        "https://images.unsplash.com/photo-1559757175-7cb057fba93c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "Dislocation",
      description:
        "Professional assessment and appropriate supportive care for musculoskeletal injuries.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  // Only 4 treatments for Home Page
  const featuredTreatments = treatments.slice(0, 4);

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

          {featuredTreatments.map((treatment) => (
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