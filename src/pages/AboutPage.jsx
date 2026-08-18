import React from "react";
import {
    FaBullseye,
    FaEye,
    FaHandHoldingHeart,
    FaHeartbeat,
    FaUserCheck,
    FaArrowRight,
} from "react-icons/fa";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CTA from "../components/CTA";
import AboutInfoCard from "../components/AboutInfoCard";
import PageHero from "../components/PageHero";
import SEO from "../components/SEO";


const AboutPage = () => {


    const aboutCards = [
        {
            id: 1,
            icon: <FaBullseye />,
            title: "Our Mission",
            description:
                "Our mission is to provide thoughtful and personalized chiropractic care that supports better mobility, comfort and overall physical well-being. We aim to understand each patient's needs and provide care with professionalism, compassion and respect.",
        },
        {
            id: 2,
            icon: <FaEye />,
            title: "Our Vision",
            description:
                "Our vision is to become a trusted destination for chiropractic and musculoskeletal care, helping individuals live more comfortably and confidently through better movement and responsible healthcare.",
        },
    ];

    const values = [
        {
            id: 1,
            icon: <FaHandHoldingHeart />,
            title: "Patient-Centered Care",
            description:
                "We listen to your concerns and focus on care that is appropriate to your individual needs.",
        },
        {
            id: 2,
            icon: <FaHeartbeat />,
            title: "Focus on Well-Being",
            description:
                "Our approach focuses not only on discomfort, but also on supporting healthy movement and everyday quality of life.",
        },
        {
            id: 3,
            icon: <FaUserCheck />,
            title: "Personal Attention",
            description:
                "We believe every patient deserves respectful communication, careful attention and a comfortable care experience.",
        },
    ];

    return (
        <div className="bg-white">
            <SEO
                title="About Us | WM Amir Chiropractic Health Care"
                description="WM Amir Chiropractic Health Care provides patient-focused chiropractic care with a personalized approach to mobility, comfort and physical well-being in Manipur."
                canonical="https://wmamirchiropractic.online/about"
            />

            <Navbar />

            {/* =====================================
          ABOUT HERO
      ====================================== */}
            <PageHero
                badge="About WM Amir"
                title="Dedicated to Helping You"
                highlight="Move Better"
                description="WM Amir Chiropractic Health Care is focused on providing personalized chiropractic care for people experiencing musculoskeletal discomfort and movement-related concerns."
            />

            {/* =====================================
          ABOUT INTRO
      ====================================== */}
            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="grid lg:grid-cols-2 gap-14 items-center">

                        {/* Left content */}
                        <div>

                            <span className="text-teal-700 font-semibold text-sm uppercase tracking-wider">
                                Who We Are
                            </span>

                            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800">
                                Chiropractic Care With a
                                <span className="text-teal-700"> Personal Approach</span>
                            </h2>
                            <p className="mt-6 text-slate-500 leading-8">
                                At WM Amir Chiropractic Health Care, we believe that every patient
                                deserves care that is tailored to their individual needs. With over
                                4 years of experience in chiropractic care, Dr. WM Amir is committed
                                to providing professional and personalized treatment focused on
                                improving mobility, reducing discomfort, and supporting better
                                physical function.
                            </p>

                            <p className="mt-4 text-slate-500 leading-8">
                                Every patient's condition and concerns are different, which is why
                                we take the time to understand your symptoms, daily activities,
                                and physical needs before providing appropriate care. Our approach
                                focuses on patient comfort, careful assessment, and individualized
                                treatment plans designed to support your overall well-being.
                            </p>

                            <p className="mt-4 text-slate-500 leading-8">
                                With experience in treating a range of musculoskeletal and
                                mobility-related concerns, Dr. WM Amir aims to create a welcoming
                                environment where patients feel comfortable discussing their
                                concerns and receiving the care they need. Our goal is to help you
                                move better, feel better, and maintain a healthier and more active
                                lifestyle.
                            </p>
                            {/* Small highlights */}
                            <div className="mt-8 grid sm:grid-cols-2 gap-4">

                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                                    <span className="text-slate-700 font-medium">
                                        Personalized Care
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                                    <span className="text-slate-700 font-medium">
                                        Patient Focused
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                                    <span className="text-slate-700 font-medium">
                                        Professional Approach
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                                    <span className="text-slate-700 font-medium">
                                        Comfortable Environment
                                    </span>
                                </div>

                            </div>

                        </div>


                        {/* Right visual */}
                        <div className="relative">

                            <div className="rounded-3xl overflow-hidden">
                                <img
                                    src="/images/14.jpeg"
                                    alt="Chiropractic care"
                                    className="w-full h-[450px] object-cover"
                                />
                            </div>

                            {/* Floating card */}
                            <div className="absolute -bottom-6 -left-4 md:-left-8 bg-white rounded-2xl shadow-xl p-5 border border-slate-100 max-w-xs">

                                <div className="flex items-center gap-3">

                                    <div className="w-11 h-11 rounded-full bg-teal-50 text-teal-700 flex items-center justify-center">
                                        <FaHandHoldingHeart />
                                    </div>

                                    <div>
                                        <p className="font-bold text-slate-800">
                                            Patient First
                                        </p>

                                        <p className="text-xs text-slate-500 mt-1">
                                            Care with attention and respect
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* =====================================
          MISSION & VISION
      ====================================== */}
            <section className="py-16 bg-slate-100">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-2xl mx-auto mb-12">

                        <span className="inline-block px-4 py-2 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold">
                            What Drives Us
                        </span>

                        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-800">
                            Our Mission & Vision
                        </h2>

                        <p className="mt-4 text-slate-500 leading-7">
                            Our work is guided by a simple commitment to provide
                            thoughtful care and help people move toward a healthier,
                            more comfortable life.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-2 gap-7">

                        {aboutCards.map((card) => (
                            <AboutInfoCard
                                key={card.id}
                                icon={card.icon}
                                title={card.title}
                                description={card.description}
                            />
                        ))}

                    </div>

                </div>
            </section>


            {/* =====================================
          OUR APPROACH
      ====================================== */}
            <section className="py-20 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    <div className="text-center max-w-2xl mx-auto mb-12">

                        <span className="text-teal-700 font-semibold text-sm uppercase tracking-wider">
                            Our Approach
                        </span>

                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-800">
                            Care Built Around You
                        </h2>

                        <p className="mt-4 text-slate-500 leading-7">
                            We believe good care begins with understanding the person,
                            not just the problem.
                        </p>

                    </div>


                    <div className="grid md:grid-cols-3 gap-6">

                        {values.map((value) => (
                            <AboutInfoCard
                                key={value.id}
                                icon={value.icon}
                                title={value.title}
                                description={value.description}
                            />
                        ))}

                    </div>

                </div>
            </section>


            {/* =====================================
          CTA
      ====================================== */}
            <CTA />

            <Footer />

        </div>
    );
};

export default AboutPage;