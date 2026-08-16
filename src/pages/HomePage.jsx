import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Services from '../components/Services'

import WhyChooseUs from '../components/WhyChooseUs'
import CTA from '../components/CTA'
import Hero from '../components/Hero'






const HomePage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
        
      {/* Chiropractor Section */}
<section className="bg-white py-20">
    <div className="max-w-7xl mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Doctor Image */}
            <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-xl">
                    <img
                        src="profile.jpeg"
                        alt=" WM Amir"
                        className="w-full h-[480px] object-cover"
                    />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-teal-600 text-white rounded-2xl px-6 py-3 max-md:py-2 max-md:px-4 max-md:-right-4 shadow-lg">
                    <p className="text-sm text-teal-100">
                        Your Trusted
                    </p>
                    <p className="text-xl font-bold">
                        Chiropractor
                    </p>
                </div>
            </div>

            {/* Content */}
            <div>
                <span className="inline-block bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold mb-5">
                    Meet Your Chiropractor
                </span>

                <h2 className="text-4xl font-bold text-slate-800 leading-tight mb-3">
                    _ WM Amir
                </h2>

                <p className="text-teal-600 font-medium text-lg mb-6">
                    Chiropractic Care Specialist
                </p>

                <p className="text-slate-600 leading-7 mb-5">
                    At WM Amir Chiropractic Care, every treatment is focused on
                    helping you move better, feel better, and live with greater
                    confidence.
                </p>

                <p className="text-slate-600 leading-7 mb-6">
                    Dr. WM Amir takes a personalized approach to chiropractic
                    care, understanding each patient's concerns and providing
                    care suited to their individual needs. The goal is to
                    support better movement, improved comfort, and overall
                    well-being.
                </p>

                {/* Quote */}
                <div className="border-l-4 border-teal-500 pl-5 mb-8">
                    <p className="text-slate-700 italic text-lg">
                        “Better movement leads to a better quality of life.”
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                        — Dr. WM Amir
                    </p>
                </div>

                {/* Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                        <span className="text-slate-600">
                            Personalized Care
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                        <span className="text-slate-600">
                            Patient-Focused Treatment
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                        <span className="text-slate-600">
                            Pain & Mobility Care
                        </span>
                    </div>

                    <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                        <span className="text-slate-600">
                            Individual Treatment Plans
                        </span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
  
        <Services />
        <WhyChooseUs />
        <CTA />
        <Footer />
        </div>
    )
}

export default HomePage
