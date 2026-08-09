import React from "react";
import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";

const CTA = () => {
  return (
    <section className="py-16 max-md:py-12 bg-slate-200">
      <div className="max-w-8xl mx-auto px-6">

        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-teal-800 px-8 py-12 md:px-14 md:py-14">

          {/* Decorative circles */}
          <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/5"></div>
          <div className="absolute -bottom-24 -left-20 w-64 h-64 rounded-full bg-teal-400/10"></div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* Content */}
            <div className="text-center lg:text-left max-w-2xl">

              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-white/10 text-teal-200 text-sm font-semibold">
                Start Your Care Today
              </span>

              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                Take the First Step Toward
                <span className="text-teal-300"> Better Mobility</span>
              </h2>

              <p className="mt-4 text-slate-300 leading-7 max-w-xl">
                Have questions about your condition or chiropractic care?
                Get in touch with WM Amir Chiropractic Health Care to discuss
                your needs.
              </p>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">

              <a
                href="tel:+916009547472"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-white font-semibold transition-all duration-300"
              >
                <FaPhoneAlt size={14} />
                Contact Now
              </a>

              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold transition-all duration-300"
              >
                Get In Touch
                <FaArrowRight size={14} />
              </a>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default CTA;