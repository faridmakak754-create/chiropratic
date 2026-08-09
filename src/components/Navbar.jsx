import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Home,
  Info,
  Image,
  Stethoscope,
  Phone,
  Menu,
  X,
} from "lucide-react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "Home",
      path: "/",
      icon: <Home size={18} />,
    },
    {
      name: "About",
      path: "/about",
      icon: <Info size={18} />,
    },
    {
      name: "Treatments",
      path: "/treatments",
      icon: <Stethoscope size={18} />,
    },
    {
      name: "Gallery",
      path: "/gallery",
      icon: <Image size={18} />,
    },
    {
      name: "Contact",
      path: "/contact",
      icon: <Phone size={18} />,
    },
  ];

  return (
    <>
      {/* Navbar */}

      <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-700 bg-gradient-to-r from-slate-900 via-slate-800 to-teal-900 backdrop-blur-lg">
        <div className="flex h-20 items-center justify-between px-8 xl:px-16">

          {/* Logo */}

          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600 shadow-lg">
              <span className="text-lg font-bold text-white">
                WM
              </span>
            </div>

            <div>
              <h1 className="text-lg font-bold text-white">
                WM AMIR
              </h1>

              <p className="text-xs text-teal-300">
                Chiropractic Health Care
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="group relative text-slate-300 transition-all duration-300 hover:text-white"
              >
                {link.name}

                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}

          <button
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="lg:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-7 w-7 text-white" />
            ) : (
              <Menu className="h-7 w-7 text-white" />
            )}
          </button>
        </div>
      </nav>

      {/* Overlay */}

      <div
        className={`fixed inset-0 z-40 bg-black/70 transition-all duration-300 ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Sidebar */}

      <div
        className={`fixed top-0 left-0 z-50 h-screen w-72 border-r border-slate-700 bg-slate-900 shadow-2xl transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        }`}
      >
        {/* Header */}

        <div className="flex items-center justify-between border-b border-slate-700 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600">
              <span className="font-bold text-white">
                WM
              </span>
            </div>

            <div>
              <h2 className="font-semibold text-white">
                WM AMIR
              </h2>

              <p className="text-xs text-teal-300">
                Chiropractic Care
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              setIsMobileMenuOpen(false)
            }
          >
            <X className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Mobile links */}

        <div className="space-y-2 p-5">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() =>
                setIsMobileMenuOpen(false)
              }
              className="flex items-center gap-4 rounded-xl px-4 py-3 text-slate-300 transition-all duration-300 hover:translate-x-2 hover:bg-slate-800 hover:text-white"
            >
              {link.icon}

              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="h-20"></div>
    </>
  );
};

export default NavBar;