import React from "react";
import {
    FaPhoneAlt,
    FaWhatsapp,
    FaEnvelope,
    FaMapMarkerAlt,
    FaArrowRight,
} from "react-icons/fa";

import NavBar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";
import CTA from "../components/CTA";

const ContactPage = () => {
    return (
        <div className="bg-white">

            {/* =====================================================
          NAVBAR
      ====================================================== */}
            <NavBar />


            {/* =====================================================
          PAGE HERO
      ====================================================== */}
            <PageHero
                badge="Contact WM Amir"
                title="We're Here to"
                highlight="Help You"
                description="Have questions about our chiropractic care? Get in touch with WM Amir Chiropractic Health Care and let us know how we can assist you."
            />


            {/* =====================================================
          CONTACT INFORMATION
      ====================================================== */}
            <section className="py-16 md:py-20 bg-white">

                <div className="max-w-7xl mx-auto px-6">

                    {/* Section Heading */}
                    <div className="max-w-2xl mb-10">

                        <span className="text-sm font-semibold uppercase tracking-wider text-teal-700">
                            Contact Information
                        </span>

                        <h2 className="mt-2 text-3xl md:text-4xl font-bold text-slate-800">
                            Connect With WM Amir
                        </h2>

                        <p className="mt-4 text-slate-500 leading-7">
                            Choose the most convenient way to reach our chiropractic
                            health care team.
                        </p>

                    </div>


                    {/* =================================================
              CONTACT CARDS
          ================================================== */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">


                        {/* ================= CALL ================= */}
                        <div className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">

                            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-lg group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                                <FaPhoneAlt />
                            </div>

                            <h3 className="mt-5 font-bold text-slate-800">
                                Call Us
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                Speak directly with us
                            </p>

                            <div className="mt-4 space-y-1">

                                <a
                                    href="tel:+916009547472"
                                    className="block text-sm font-semibold text-teal-700 hover:text-teal-900 transition"
                                >
                                    +91 60095 47472
                                </a>

                            </div>

                        </div>


                        {/* ================= WHATSAPP ================= */}
                        <a
                            href="https://wa.me/916009547472"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                        >

                            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-xl group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                                <FaWhatsapp />
                            </div>

                            <h3 className="mt-5 font-bold text-slate-800">
                                WhatsApp
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                Chat with us directly
                            </p>

                            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 group-hover:gap-3 transition-all duration-300">
                                Start Chat
                                <FaArrowRight size={11} />
                            </div>

                        </a>


                        {/* ================= EMAIL ================= */}
                        <a
                            href="mailto:your-email@example.com"
                            className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                        >

                            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-lg group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                                <FaEnvelope />
                            </div>

                            <h3 className="mt-5 font-bold text-slate-800">
                                Email Us
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                Send us your enquiry
                            </p>

                            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 group-hover:gap-3 transition-all duration-300">
                                Send Email
                                <FaArrowRight size={11} />
                            </div>

                        </a>


                        {/* ================= LOCATION ================= */}
                        <a
                            href="https://maps.google.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                        >

                            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-lg group-hover:bg-teal-700 group-hover:text-white transition-all duration-300">
                                <FaMapMarkerAlt />
                            </div>

                            <h3 className="mt-5 font-bold text-slate-800">
                                Visit Us
                            </h3>

                            <p className="mt-2 text-sm text-slate-500">
                                Find our chiropractic clinic
                            </p>

                            <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 group-hover:gap-3 transition-all duration-300">
                                Get Directions
                                <FaArrowRight size={11} />
                            </div>

                        </a>

                    </div>


                    {/* =================================================
              CONTACT DETAILS / LOCATION
          ================================================== */}

                    <div className="mt-14 grid lg:grid-cols-2 gap-8">

                        {/* Left - Contact */}
                        <div className="rounded-3xl bg-slate-900 p-8 md:p-10 overflow-hidden relative">

                            {/* Decoration */}
                            <div className="absolute -top-20 -right-20 w-56 h-56 bg-teal-500/10 rounded-full blur-2xl"></div>

                            <div className="relative">

                                <span className="text-teal-300 text-sm font-semibold uppercase tracking-wider">
                                    Get in Touch
                                </span>

                                <h3 className="mt-3 text-2xl md:text-3xl font-bold text-white">
                                    Ready to Talk About Your Care?
                                </h3>

                                <p className="mt-4 text-slate-300 leading-7">
                                    If you have questions about your condition or would like to
                                    speak with us before your visit, we're here to assist you.
                                    Contact WM Amir Chiropractic Health Care directly.
                                </p>

                                <a
                                    href="tel:+916009547472"
                                    className="inline-flex items-center gap-3 mt-7 px-5 py-3 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold transition-all duration-300"
                                >
                                    <FaPhoneAlt size={14} />
                                    Call WM Amir
                                </a>

                            </div>

                        </div>


                        {/* Right - Location */}
                        <div className="rounded-3xl bg-slate-50 border border-slate-100 p-8 md:p-10">

                            <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center text-lg">
                                <FaMapMarkerAlt />
                            </div>

                            <h3 className="mt-5 text-2xl font-bold text-slate-800">
                                Find Our Clinic
                            </h3>

                            <p className="mt-3 text-slate-500 leading-7">
                                WM Amir Chiropractic Health Care
                                <br />
                                Mayang Imphal
                                <br />
                                Bengoon Maning Main Road
                                <br />
                                Manipur, India
                            </p>

                            <a
                                href="https://maps.google.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-teal-700 hover:text-teal-900 transition"
                            >
                                Get Directions
                                <FaArrowRight size={11} />
                            </a>

                        </div>

                    </div>
                </div>
            </section>




            {/* =====================================================
          FOOTER
      ====================================================== */}
            <Footer />

        </div>
    );
};

export default ContactPage;