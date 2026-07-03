'use client';

import React from "react";
import { Container } from "@components/shared";
import { motion } from "framer-motion";
import {
  UserPlus,
  Calendar,
  CreditCard,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    id: 1,
    icon: UserPlus,
    title: "Register",
    description: "Create your account in less than 2 minutes with basic information.",
  },
  {
    id: 2,
    icon: Calendar,
    title: "Choose Your Travel Dates",
    description: "Select your travel dates and destination to get personalized coverage.",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Pay with M-Pesa",
    description: "Quick and secure payment using M-Pesa directly from your phone.",
  },
  {
    id: 4,
    icon: CheckCircle,
    title: "Receive Instant Cover",
    description: "Get your digital policy certificate immediately via email.",
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-20 bg-background">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get protected in just four simple steps.
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8 relative">
            {/* Timeline Line */}
            <div className="absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Step Number Circle */}
                  <div className="flex justify-center mb-8 relative z-10">
                    <div className="w-20 h-20 bg-white border-4 border-primary rounded-full flex items-center justify-center shadow-lg">
                      <Icon size={32} className="text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {step.id}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="w-1 h-12 bg-gradient-to-b from-secondary to-transparent mt-2"></div>
                  )}
                </div>
                <div className="pt-2 pb-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
