'use client';

import React from "react";
import { Container, Card } from "@components/shared";
import { motion } from "framer-motion";
import {
  Heart,
  Shield,
  Headphones,
  FileCheck,
  Zap,
  Clock,
} from "lucide-react";

const benefits = [
  {
    id: 1,
    icon: Heart,
    title: "Hospital Bills",
    description: "Coverage up to KSh 1,000,000 for emergency medical treatment.",
  },
  {
    id: 2,
    icon: Shield,
    title: "Accident Protection",
    description: "Complete protection against accidents and injuries while traveling.",
  },
  {
    id: 3,
    icon: Zap,
    title: "Emergency Assistance",
    description: "24/7 emergency response team ready to help at any time.",
  },
  {
    id: 4,
    icon: FileCheck,
    title: "Digital Policy Certificate",
    description: "Instant digital certificate sent to your email within minutes.",
  },
  {
    id: 5,
    icon: Clock,
    title: "Fast Claims Process",
    description: "Submit claims in minutes and receive approval within 48 hours.",
  },
  {
    id: 6,
    icon: Headphones,
    title: "24/7 Customer Support",
    description: "Dedicated support team available round the clock for assistance.",
  },
];

export const Benefits: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section id="benefits" className="py-20 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Safiri Cover?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive coverage designed specifically for Kenyan travelers with benefits that matter.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
              >
                <Card className="h-full">
                  <div className="flex flex-col h-full">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <Icon size={24} className="text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {benefit.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};
