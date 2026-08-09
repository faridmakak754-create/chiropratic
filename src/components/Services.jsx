import React from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

  const services = [
    {
      id: 1,
      title: "Migraine",
      description:
        "Specialized chiropractic care focused on relieving migraine-related discomfort and improving overall well-being.",
      image:
        "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Neck Pain",
      description:
        "Gentle chiropractic techniques designed to improve neck mobility and reduce pain caused by tension and strain.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Frozen Shoulder",
      description:
        "Care designed to support shoulder movement, flexibility and recovery from stiffness and discomfort.",
      image:
        "https://images.unsplash.com/photo-1556760544-74068565f05c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Tennis Elbow",
      description:
        "Targeted chiropractic care to support recovery from elbow discomfort and improve functional movement.",
      image:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Sciatica",
      description:
        "Personalized care to help manage lower-back and leg discomfort associated with sciatic nerve irritation.",
      image:
        "https://images.unsplash.com/photo-1517838277536-f5f99be5014f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Knee Pain",
      description:
        "Supportive chiropractic treatment aimed at improving mobility and helping manage everyday knee discomfort.",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Back Pain",
      description:
        "Chiropractic care focused on spinal alignment, mobility and helping reduce everyday back discomfort.",
      image:
        "https://images.unsplash.com/photo-1559757175-7cb057fba93c?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 8,
      title: "Dislocation",
      description:
        "Professional assessment and supportive care for musculoskeletal injuries and movement-related concerns.",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    },
    //{
    //   id: 9,
    //   title: "Musculoskeletal Issues",
    //   description:
    //     "Comprehensive chiropractic care for a range of muscle, joint, bone and movement-related concerns.",
    //   image:
    //     "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    // },
  ];

  return (
    <section className="py-20 bg-gray-100">

      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <span className="inline-block px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-4">
            Our Services
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Specialized Chiropractic Care
          </h2>

          <p className="mt-4 text-slate-500 leading-7">
            We provide personalized chiropractic care to help improve
            mobility, manage discomfort and support your overall physical
            well-being.
          </p>

        </div>


        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Services;