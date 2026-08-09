import React from "react";
import {
  FaUserMd,
  FaHandsHelping,
  FaHeart,
  FaShieldAlt,
  FaClock,
  FaSmile,
} from "react-icons/fa";

import WhyChooseCard from "./WhyChooseCard";

const WhyChooseUs = () => {
  const reasons = [
    {
      id: 1,
      icon: <FaUserMd />,
      title: "Experienced Care",
      description:
        "Professional chiropractic care focused on understanding your condition and providing appropriate treatment.",
    },
    {
      id: 2,
      icon: <FaHandsHelping />,
      title: "Personalized Treatment",
      description:
        "Every patient is different. We focus on your individual needs and create a treatment approach suited to you.",
    },
    {
      id: 3,
      icon: <FaHeart />,
      title: "Patient Focused",
      description:
        "Your comfort and well-being are at the heart of every treatment and consultation.",
    },
    {
      id: 4,
      icon: <FaShieldAlt />,
      title: "Safe & Careful Approach",
      description:
        "We emphasize careful assessment and appropriate chiropractic techniques for your specific needs.",
    },
    {
      id: 5,
      icon: <FaClock />,
      title: "Convenient Care",
      description:
        "Accessible chiropractic services designed to make getting the care you need easier.",
    },
    {
      id: 6,
      icon: <FaSmile />,
      title: "Friendly Environment",
      description:
        "A welcoming and comfortable environment where you can feel relaxed throughout your care.",
    },
  ];

  return (
    <section className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">

          <span className="inline-block px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-4">
            Why Choose Us
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">
            Care You Can Trust
          </h2>

          <p className="mt-4 text-slate-500 leading-7">
            At WM Amir Chiropractic Health Care, we focus on personalized
            care, patient comfort and helping you move toward better
            physical well-being.
          </p>

        </div>


        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {reasons.map((reason) => (
            <WhyChooseCard
              key={reason.id}
              icon={reason.icon}
              title={reason.title}
              description={reason.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default WhyChooseUs;