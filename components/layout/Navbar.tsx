'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@components/shared";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { href: "/#benefits", label: "Benefits" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#testimonials", label: "Testimonials" },
    { href: "/#faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 shadow-lg">
      <Container>
        <div className="flex justify-between items-center py-5">
          <Link href="/" className="flex items-center gap-3">
  <Image
    src="/logo.png"
    alt="Safiri Cover"
    width={70}
    height={70}
    priority
    className="object-contain"
  />

  <div className="hidden sm:block leading-tight">
    <h1 className="text-2xl font-extrabold text-slate-900">
      Safiri Cover
    </h1>

    <p className="text-sm text-slate-500">
      Travel with Confidence
    </p>
  </div>
</Link>

{/* Desktop Menu */}
<div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
              <Link
  key={link.href}
  href={link.href}
  className="relative text-slate-700 font-semibold hover:text-primary transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
>
  {link.label}
</Link>
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            <Link
              href="/login"
              className="hidden sm:flex items-center px-5 py-2 rounded-full font-semibold border border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-700 to-emerald-600 text-white font-bold shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              Get Covered
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-smooth"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden pb-4 border-t border-gray-100 pt-4 space-y-2"
          >
            {navLinks.map((link) => (
              <a
                <Link
  key={link.href}
  href={link.href}
  className="block px-4 py-2 text-gray-600 hover:bg-primary/5 rounded-lg transition-smooth"
>
  {link.label}
</Link>
              </a>
            ))}
          </motion.div>
        )}
      </Container>
    </nav>
  );
};
