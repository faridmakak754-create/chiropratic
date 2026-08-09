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
    <footer className="relative border-t border-slate-700 bg-gradient-to-b from-slate-900 via-slate-800 to-teal-900">
      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* Main Grid */}

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}

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

            <p className="mt-5 text-sm leading-7 text-slate-300">
              Helping patients improve mobility,
              relieve pain, and achieve better
              spinal health through professional
              chiropractic care.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-slate-300 transition-all duration-300 hover:translate-x-2 hover:text-teal-400"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Contact Us
            </h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 h-4 w-4 text-teal-400" />

                <span className="text-sm text-slate-300">
                  +1 (555) 123-4567
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 h-4 w-4 text-teal-400" />

                <span className="text-sm text-slate-300">
                  info@wmamir.com
                </span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-4 w-4 text-teal-400" />

                <span className="text-sm text-slate-300">
                  Los Angeles, California
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="mt-1 h-4 w-4 text-teal-400" />

                <span className="text-sm text-slate-300">
                  Mon–Fri: 8 AM – 6 PM
                </span>
              </div>
            </div>
          </div>

          {/* Social Media */}

          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">
              Follow Us
            </h3>

            <div className="flex gap-4">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 transition-all duration-300 hover:scale-110 hover:bg-teal-500"
              >
                <FaFacebookF className="text-white" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 transition-all duration-300 hover:scale-110 hover:bg-teal-500"
              >
                <FaInstagram className="text-white" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 transition-all duration-300 hover:scale-110 hover:bg-teal-500"
              >
                <FaXTwitter className="text-white" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 transition-all duration-300 hover:scale-110 hover:bg-teal-500"
              >
                <FaYoutube className="text-white" />
              </a>
            </div>

            <div className="mt-6 rounded-xl border border-slate-700 bg-slate-800 p-4">
              <p className="text-sm text-slate-300">
                Need immediate assistance?
              </p>

              <p className="mt-2 font-semibold text-teal-400">
                +1 (555) 999-8888
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}

        <div className="mt-12 border-t border-slate-700 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 md:flex-row">
            <p className="text-sm text-slate-400">
              © {new Date().getFullYear()} WM AMIR
              Chiropractic Health Care. All rights
              reserved.
            </p>

            <p className="text-sm text-slate-400">
              Developed by{" "}
              <a href="https://www.isitcoding.in/" target="blank" className="font-semibold text-teal-400">
                ISITCoding
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;