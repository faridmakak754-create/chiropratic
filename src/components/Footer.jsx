import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Treatments", path: "/treatments" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-slate-900">

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* ================= MAIN GRID ================= */}

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* ================= BRAND ================= */}

          <div>
            <Link to="/" className="flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600 shadow-lg">
                <span className="text-lg font-bold text-white">
                  WM
                </span>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white">
                  WM AMIR
                </h2>

                <p className="text-xs text-teal-300">
                  Chiropractic Health Care
                </p>
              </div>

            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-300">
              Helping patients improve mobility, manage pain,
              and support better physical well-being through
              professional chiropractic care.
            </p>
          </div>


          {/* ================= QUICK LINKS ================= */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">

              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="inline-block text-sm text-slate-300 transition-all duration-300 hover:translate-x-2 hover:text-teal-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}

            </ul>
          </div>


          {/* ================= CONTACT ================= */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-4">

              {/* Phone */}
              <a
                href="tel:+916009547472"
                className="flex items-start gap-3 transition hover:text-teal-400"
              >
                <Phone className="mt-1 h-4 w-4 shrink-0 text-teal-400" />

                <span className="text-sm text-slate-300">
                  +91 60095 47472
                </span>
              </a>


              {/* Email */}
              <a
                href="mailto:wangmayumamir9@gmail.com"
                className="flex items-start gap-3 transition hover:text-teal-400"
              >
                <Mail className="mt-1 h-4 w-4 shrink-0 text-teal-400" />

                <span className="text-sm text-slate-300">
                 wangmayumamir9@gmail.com
                </span>
              </a>


              {/* Location */}
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-teal-400" />

                <span className="text-sm leading-6 text-slate-300">
                  Mayang Imphal
                  <br />
                  Bengoon Maning Main Road
                  <br />
                  Manipur, India
                </span>
              </div>


              {/* Timing */}
              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-4 w-4 shrink-0 text-teal-400" />

                <span className="text-sm leading-6 text-slate-300">
                  Contact us for
                  <br />
                  treatment availability
                </span>
              </div>

            </div>
          </div>


          {/* ================= SOCIAL ================= */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-3">

              <a
                href="https://www.facebook.com/profile.php?id=61590708765474"
                aria-label="Facebook"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 border border-slate-700 transition-all duration-300 hover:scale-110 hover:border-teal-500 hover:bg-teal-500"
              >
                <FaFacebookF className="text-white" />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 border border-slate-700 transition-all duration-300 hover:scale-110 hover:border-teal-500 hover:bg-teal-500"
              >
                <FaInstagram className="text-white" />
              </a>

              <a
                href="#"
                aria-label="X"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 border border-slate-700 transition-all duration-300 hover:scale-110 hover:border-teal-500 hover:bg-teal-500"
              >
                <FaXTwitter className="text-white" />
              </a>

              <a
                href="https://www.youtube.com/@wangmayumamir"
                aria-label="YouTube"
                target="blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 border border-slate-700 transition-all duration-300 hover:scale-110 hover:border-teal-500 hover:bg-teal-500"
              >
                <FaYoutube className="text-white" />
              </a>

            </div>


            {/* Call Box */}

            <div className="mt-6 rounded-xl border border-slate-700 bg-slate-800 p-4">

              <p className="text-sm text-slate-300">
                Need assistance?
              </p>

              <a
                href="tel:+916009547472"
                className="mt-2 inline-block font-semibold text-teal-400 transition hover:text-teal-300"
              >
                +91 60095 47472
              </a>

            </div>

          </div>

        </div>


        {/* ================= BOTTOM ================= */}

        <div className="mt-12 border-t border-slate-700 pt-6">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            {/* Copyright */}

            <p className="text-center text-sm text-slate-400 md:text-left">
              © {new Date().getFullYear()} WM AMIR Chiropractic
              Health Care. All rights reserved.
            </p>


            {/* Legal Links */}

            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">

              <Link
                to="/privacy"
                className="text-sm text-slate-400 transition hover:text-teal-400"
              >
                Privacy Policy
              </Link>

              <span className="text-slate-700">
                |
              </span>

              <Link
                to="/terms"
                className="text-sm text-slate-400 transition hover:text-teal-400"
              >
                Terms & Conditions
              </Link>

              <span className="text-slate-700">
                |
              </span>

              <p className="text-sm text-slate-400">
                Developed by{" "}
                <a
                  href="https://www.isitcoding.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-teal-400 transition hover:text-teal-300"
                >
                  ISITCoding
                </a>
              </p>

            </div>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;