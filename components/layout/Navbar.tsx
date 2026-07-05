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
    width={80}
    height={80}
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
<div className="hidden md:flex items-center gap-8">
  {navLinks.map((link) => (
    <Link
      key={link.href}
      href={link.href}
      className="relative text-slate-700 font-semibold hover:text-primary transition-all duration-300 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
    >
      {link.label}
    </Link>
  ))}
</div>

          <div className="hidden md:flex items-center gap-4">
  <Link
    href="/login"
    className="rounded-full border border-primary px-5 py-2 font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
  >
    Login
  </Link>

  <Link
    href="/register"
    className="rounded-full bg-gradient-to-r from-blue-700 to-emerald-600 px-6 py-3 font-bold text-white shadow-lg hover:scale-105 transition-all duration-300"
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
    className="md:hidden mt-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-xl space-y-2"
  >
    {navLinks.map((link) => (
      <Link
        key={link.href}
        href={link.href}
        onClick={() => setIsOpen(false)}
        className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-primary/5 hover:text-primary transition-all duration-300"
      >
        {link.label}
      </Link>
    ))}

    <div className="mt-4 flex flex-col gap-3">
      <Link
        href="/login"
        onClick={() => setIsOpen(false)}
        className="w-full rounded-full border border-primary px-4 py-3 text-center font-semibold text-primary hover:bg-primary hover:text-white transition-all duration-300"
      >
        Login
      </Link>

      <Link
        href="/register"
        onClick={() => setIsOpen(false)}
        className="w-full rounded-full bg-gradient-to-r from-blue-700 to-emerald-600 px-4 py-3 text-center font-bold text-white shadow-lg hover:scale-[1.02] transition-all duration-300"
      >
        Get Covered
      </Link>
    </div>
  </motion.div>
)}
