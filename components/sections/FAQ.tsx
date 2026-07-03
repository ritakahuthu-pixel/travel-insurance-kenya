'use client';

import React from "react";
import { Container, Card } from "@components/shared";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How do I buy cover?",
    answer: "Buying cover is simple. Register on our platform, select your travel dates, choose your coverage plan, pay via M-Pesa, and receive your digital policy certificate instantly. The entire process takes less than 5 minutes.",
  },
  {
    id: 2,
    question: "When does my cover start?",
    answer: "Your coverage starts immediately after payment is confirmed. You'll receive a digital policy certificate via email with all the details. You can start your journey with full protection right away.",
  },
  {
    id: 3,
    question: "How do I submit a claim?",
    answer: "Submit claims through our app or website. Upload the necessary documents (receipts, medical reports, etc.), and our team will review and approve them within 48 hours. Approved claims are processed to your M-Pesa account within 5 business days.",
  },
  {
    id: 4,
    question: "Can I renew my policy?",
    answer: "Yes! You can renew your policy anytime before it expires. Simply log in to your account, select the renewal option, choose new travel dates, and make payment. You'll get a new policy certificate instantly.",
  },
  {
    id: 5,
    question: "Is my cover valid anywhere in Kenya?",
    answer: "Yes, your Safiri Cover insurance is valid throughout Kenya and covers all types of travel - road, rail, and air. Whether you're traveling within Nairobi or across the country, you're protected.",
  },
];

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = React.useState<number | null>(1);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  return (
    <section id="faq" className="py-20 bg-background">
      <Container maxWidth="2xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about Safiri Cover insurance.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-4"
        >
          {faqs.map((faq) => (
            <motion.div key={faq.id} variants={itemVariants}>
              <Card noPadding>
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full px-6 md:px-8 py-5 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                >
                  <h3 className="text-lg font-bold text-gray-900 text-left">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown
                      size={24}
                      className="text-primary flex-shrink-0"
                    />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-100"
                    >
                      <p className="px-6 md:px-8 py-5 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
