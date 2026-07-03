import React from "react";
import Link from "next/link";
import { Container } from "@components/shared";
import { Mail, Phone, MapPin, Shield } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <Container>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-2xl flex items-center justify-center">
                <Shield size={20} className="text-gray-900" />
              </div>
              <span className="font-bold text-lg">Safiri Cover Kenya</span>
            </div>
            <p className="text-gray-400 text-sm">Affordable daily travel insurance for journeys across Kenya.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="/" className="hover:text-accent transition-smooth">Home</Link></li>
              <li><Link href="#" className="hover:text-accent transition-smooth">Buy Cover</Link></li>
              <li><Link href="#" className="hover:text-accent transition-smooth">Claims</Link></li>
              <li><Link href="#" className="hover:text-accent transition-smooth">Dashboard</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Support</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-accent transition-smooth">FAQ</Link></li>
              <li><Link href="#" className="hover:text-accent transition-smooth">Help Center</Link></li>
              <li><Link href="#" className="hover:text-accent transition-smooth">Terms</Link></li>
              <li><Link href="#" className="hover:text-accent transition-smooth">Privacy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>support@safiricover.ke</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 py-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Safiri Cover Kenya. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
