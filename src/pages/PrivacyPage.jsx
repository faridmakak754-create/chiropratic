import React from "react";
import NavBar from "../components/Navbar";
import PageHero from "../components/PageHero";
import Footer from "../components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="bg-white">

      {/* ================= NAVBAR ================= */}
      <NavBar />


      {/* ================= PAGE HERO ================= */}

      <PageHero
        badge="Privacy Policy"
        title="Your Privacy"
        highlight="Matters to Us"
        description="We respect your privacy and are committed to protecting the information you share with WM Amir Chiropractic Health Care."
      />


      {/* ================= PRIVACY POLICY ================= */}

      <section className="py-16 md:py-20">

        <div className="max-w-4xl mx-auto px-6">

          {/* Last Updated */}

          <div className="mb-10 rounded-xl bg-teal-50 border border-teal-100 px-5 py-4">
            <p className="text-sm text-teal-800">
              <span className="font-semibold">Last Updated:</span>{" "}
              August 2026
            </p>
          </div>


          {/* Introduction */}

          <div className="space-y-10">

            <section>
              <h2 className="text-2xl font-bold text-slate-800">
                1. Introduction
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                WM Amir Chiropractic Health Care respects your privacy
                and is committed to protecting your personal information.
                This Privacy Policy explains how information may be
                collected, used, and protected when you visit our website
                or contact us regarding our chiropractic services.
              </p>
            </section>


            {/* Information We Collect */}

            <section>
              <h2 className="text-2xl font-bold text-slate-800">
                2. Information We Collect
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                We may collect information that you voluntarily provide
                when contacting us or requesting information about our
                services, including:
              </p>

              <ul className="mt-4 space-y-2 text-slate-600 list-disc pl-6">
                <li>Your name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Information included in your enquiry</li>
                <li>Other information you choose to provide</li>
              </ul>
            </section>


            {/* How We Use Information */}

            <section>
              <h2 className="text-2xl font-bold text-slate-800">
                3. How We Use Your Information
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Information you provide may be used to:
              </p>

              <ul className="mt-4 space-y-2 text-slate-600 list-disc pl-6">
                <li>Respond to your enquiries</li>
                <li>Provide information about our services</li>
                <li>Communicate with you regarding appointments or enquiries</li>
                <li>Improve our website and services</li>
                <li>Maintain website security</li>
              </ul>
            </section>


            {/* Medical Information */}

            <section>
              <h2 className="text-2xl font-bold text-slate-800">
                4. Health and Treatment Information
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                If you choose to share health or treatment-related
                information with us, we will use such information only
                for legitimate purposes related to providing or
                communicating about chiropractic care and services.
              </p>

              <p className="mt-4 text-slate-600 leading-7">
                Please avoid sending sensitive medical information
                through general website forms or unsecured communication
                channels unless specifically requested by our clinic.
              </p>
            </section>


            {/* Information Sharing */}

            <section>
              <h2 className="text-2xl font-bold text-slate-800">
                5. Sharing of Information
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                We do not sell or rent your personal information to
                third parties. Information may only be shared when
                reasonably necessary to provide requested services,
                operate our website, comply with legal requirements,
                or protect our rights and safety.
              </p>
            </section>


            {/* Cookies */}

            <section>
              <h2 className="text-2xl font-bold text-slate-800">
                6. Cookies and Website Technologies
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Our website may use cookies or similar technologies to
                improve website functionality, understand website usage,
                and provide a better browsing experience.
              </p>
            </section>


            {/* Third Party Links */}

            <section>
              <h2 className="text-2xl font-bold text-slate-800">
                7. Third-Party Links
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Our website may contain links to third-party websites,
                such as Google Maps or social media platforms. We are
                not responsible for the privacy practices or content of
                those external websites. We recommend reviewing their
                respective privacy policies.
              </p>
            </section>


            {/* Data Security */}

            <section>
              <h2 className="text-2xl font-bold text-slate-800">
                8. Data Security
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                We take reasonable measures to protect personal
                information from unauthorized access, misuse, alteration,
                or disclosure. However, no method of transmitting or
                storing information online can be guaranteed to be
                completely secure.
              </p>
            </section>


            {/* Data Retention */}

            <section>
              <h2 className="text-2xl font-bold text-slate-800">
                9. Data Retention
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Personal information may be retained for as long as
                reasonably necessary to respond to enquiries, provide
                services, maintain appropriate records, or comply with
                applicable legal obligations.
              </p>
            </section>


            {/* Your Rights */}

            <section>
              <h2 className="text-2xl font-bold text-slate-800">
                10. Your Privacy Rights
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                Depending on applicable law, you may have rights relating
                to your personal information, including requesting access,
                correction, or deletion of certain information.
              </p>

              <p className="mt-4 text-slate-600 leading-7">
                To make a privacy-related request, please contact WM Amir
                Chiropractic Health Care directly.
              </p>
            </section>


            {/* Changes */}

            <section>
              <h2 className="text-2xl font-bold text-slate-800">
                11. Changes to This Privacy Policy
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                We may update this Privacy Policy from time to time to
                reflect changes to our services, website, or applicable
                requirements. Any updated version will be published on
                this page with a revised update date.
              </p>
            </section>


            {/* Contact */}

            <section className="rounded-2xl bg-slate-50 border border-slate-100 p-6 md:p-8">

              <h2 className="text-2xl font-bold text-slate-800">
                12. Contact Us
              </h2>

              <p className="mt-4 text-slate-600 leading-7">
                If you have any questions about this Privacy Policy or
                how your information is handled, please contact:
              </p>

              <div className="mt-5 space-y-2 text-slate-600">
                <p className="font-semibold text-slate-800">
                  WM Amir Chiropractic Health Care
                </p>

                <p>
                  Mayang Imphal, Bengoon Maning Main Road,
                  Manipur, India
                </p>

                <p>
                  Phone:{" "}
                  <a
                    href="tel:+916009547472"
                    className="text-teal-700 font-medium hover:text-teal-900"
                  >
                    +91 60095 47472
                  </a>
                </p>
              </div>

            </section>

          </div>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <Footer />

    </div>
  );
};

export default PrivacyPolicy;