import React from "react";
import NavBar from "../components/Navbar";
import PageHero from "../components/PageHero";
import ServiceCard from "../components/ServiceCard";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const TreatmentPage = () => {
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
        "Care focused on improving neck mobility and helping manage neck discomfort caused by tension and strain.",
      image:
        "neckPain.jpeg",
    },
    {
      id: 3,
      title: "Frozen Shoulder",
      description:
        "Supportive treatment for shoulder stiffness, restricted movement and related discomfort.",
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
    {
      id: 5,
      title: "Sciatica",
      description:
        "Personalized chiropractic care for lower-back and leg discomfort associated with sciatica.",
      image:
        "scatica.jpeg",
    },
    {
      id: 6,
      title: "Knee Pain",
      description:
        "Supportive treatment aimed at improving knee mobility and managing knee discomfort.",
      image:
        "KneePain.jpeg",
    },
    {
      id: 7,
      title: "Back Pain",
      description:
        "Chiropractic care focused on back mobility and helping manage everyday back discomfort.",
      image:
        "backPain.jpeg",
    },
    {
      id: 8,
      title: "Dislocation",
      description:
        "Professional assessment and appropriate supportive care for musculoskeletal injuries.",
      image:
        "Discolation.jpeg",
    },
  ];

  return (
    <div className="bg-white">

      {/* ==================================================
          NAVBAR
      ================================================== */}
      <NavBar />


      {/* ==================================================
          PAGE HERO
      ================================================== */}
      <PageHero
        badge="Our Treatments"
        title="Focused Care for"
        highlight="Better Movement"
        description="WM Amir Chiropractic Health Care provides personalized treatment for a range of musculoskeletal conditions, helping patients move with greater comfort and confidence."
      />


      {/* ==================================================
          TREATMENTS SECTION
      ================================================== */}
      <section className="py-20 bg-slate-50">

        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <div className="max-w-2xl mb-12">

            <span className="text-sm font-semibold uppercase tracking-wider text-teal-700">
              Treatment Options
            </span>

            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800">
              Conditions We
              <span className="text-teal-700"> Treat</span>
            </h2>

            <p className="mt-4 text-slate-500 leading-7">
              Our chiropractic care focuses on a variety of pain,
              mobility and musculoskeletal concerns with an
              individualized approach to treatment.
            </p>

          </div>


          {/* Treatment Cards */}
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

        </div>

      </section>


      {/* ==================================================
          MESSAGE BEFORE CTA
      ================================================== */}
      <section className="py-16 bg-white">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <span className="inline-block px-4 py-2 rounded-full bg-teal-50 border border-teal-100 text-teal-700 text-sm font-semibold">
            Personalized Care
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-slate-800">
            Your Comfort and
            <span className="text-teal-700"> Mobility Matter</span>
          </h2>

          <p className="mt-5 text-slate-500 leading-7 max-w-2xl mx-auto">
            Every person and condition is different. WM Amir Chiropractic
            Health Care focuses on understanding your concerns and
            providing care suited to your individual needs.
          </p>

        </div>

      </section>


      {/* ==================================================
          CTA
      ================================================== */}
      <CTA />


      {/* ==================================================
          FOOTER
      ================================================== */}
      <Footer />

    </div>
  );
};

export default TreatmentPage;