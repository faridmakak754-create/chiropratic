import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Home, Info, Image, Stethoscope, Phone, Menu, X } from "lucide-react";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/", icon: <Home size={19} /> },
    { name: "About", path: "/about", icon: <Info size={19} /> },
    { name: "Treatments", path: "/treatments", icon: <Stethoscope size={19} /> },
    { name: "Gallery", path: "/gallery", icon: <Image size={19} /> },
    { name: "Contact", path: "/contact", icon: <Phone size={19} /> },
  ];

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-700 bg-gradient-to-r from-slate-900 via-slate-800 to-teal-900 backdrop-blur-lg">
        <div className="flex h-20 items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16">

          {/* Logo */}
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600 shadow-lg">
              <span className="text-sm sm:text-base md:text-lg font-bold text-white">WM</span>
            </div>

            <div>
              <h1 className="text-sm sm:text-base md:text-lg font-bold text-white">WM AMIR</h1>
              <p className="text-[9px] sm:text-[10px] md:text-xs text-teal-300">Chiropractic Health Care</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className="group relative text-sm lg:text-base text-slate-300 transition duration-300 hover:text-white">
                {link.name}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white hover:bg-white/10 md:hidden">
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/70 transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-[280px] sm:w-80 border-r border-slate-700 bg-slate-900 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >

        {/* Sidebar Header */}
        <div className="flex h-20 items-center justify-between border-b border-slate-700 px-4 sm:px-5">

          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-blue-600">
              <span className="font-bold text-white">WM</span>
            </div>

            <div>
              <h2 className="text-sm sm:text-base font-semibold text-white">WM AMIR</h2>
              <p className="text-[10px] sm:text-xs text-teal-300">Chiropractic Care</p>
            </div>
          </Link>

          <button onClick={() => setIsMobileMenuOpen(false)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white">
            <X size={21} />
          </button>
        </div>

        {/* Mobile Links */}
        <div className="space-y-2 p-4 sm:p-5">
          <p className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-500">Navigation</p>

          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className="group flex items-center gap-4 rounded-xl px-4 py-3 text-sm sm:text-base text-slate-300 transition-all duration-300 hover:translate-x-2 hover:bg-slate-800 hover:text-white">
              <span className="text-teal-400">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Developed By */}
        <div className="absolute bottom-0 left-0 w-full border-t border-slate-700 bg-slate-900 px-5 py-5 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Developed by</p>
          <p className="mt-1 text-sm font-semibold text-teal-400">ISIT Coding</p>
        </div>
      </aside>

      {/* Navbar Space */}
      <div className="h-20"></div>
    </>
  );
};

export default NavBar;