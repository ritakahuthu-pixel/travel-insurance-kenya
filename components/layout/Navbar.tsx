'use client';

import React from "react";
import Link from "next/link";
import { Container } from "@components/shared";
import { Menu, X, Shield } from "lucide-react";
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
    <nav className="bg-white/95 backdrop-blur-sm shadow-soft sticky top-0 z-50">
      <Container>
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <div className="w-10 h-10 bg-primary rounded-2xl flex items-center justify-center text-white">
              <Shield size={20} />
            </div>
            <span className="hidden sm:inline text-gray-900">Safiri Cover</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-primary transition-smooth font-medium text-sm"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex gap-3">
            <Link
              href="/login"
              className="hidden sm:inline px-4 py-2 text-primary hover:bg-primary/5 rounded-2xl transition-smooth font-semibold"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="px-4 py-2 bg-primary text-white rounded-2xl hover:shadow-card transition-smooth font-semibold shadow-soft"
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
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-gray-600 hover:bg-primary/5 rounded-lg transition-smooth"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </Container>
    </nav>
  );
};
