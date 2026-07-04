'use client';

import React from "react";
import { Container, Button } from "@components/shared";
import { motion } from "framer-motion";
import { ArrowRight, Shield } from "lucide-react";
import Image from "next/image";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background via-white to-background pt-20 pb-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
        >
          {/* Left Content */}
          <div>
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6"
            >
              <Shield size={18} />
              <span className="text-sm font-semibold">Trusted by 500K+ Kenyans</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
            >
              Travel Protected<br />
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Across Kenya
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-md"
            >
              Affordable daily travel insurance with instant M-Pesa payments and digital policy certificates. Get protected for just KSh 10 per day.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" className="group">
                Get Covered
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-gray-200">
              <div>
                <p className="text-2xl md:text-3xl font-bold text-primary">500K+</p>
                <p className="text-sm text-gray-600 mt-1">Active Users</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-secondary">100%</p>
                <p className="text-sm text-gray-600 mt-1">Secure</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-gray-600 mt-1">Support</p>
              </div>
            </motion.div>
          </div>

                  {/* Right Illustration */}
      <motion.div
        variants={itemVariants}
        className="relative h-96 md:h-full hidden lg:flex items-center justify-center"
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <Image
            src="/logo (2).png"
            alt="Safiri Cover"
            width={500}
            height={500}
            priority
            className="w-[420px] h-auto object-contain drop-shadow-2xl"
        
          </motion.div>
      </Container>
    </section>
  );
};

export default Hero;
