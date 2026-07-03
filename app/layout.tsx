import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Safiri Cover Kenya - Affordable Daily Travel Insurance",
  description: "Travel Protected for Only KSh 10 Per Day. Affordable daily travel protection for journeys across Kenya.",
  keywords: ["travel insurance", "Kenya", "daily insurance", "travel cover", "Safiri Cover"],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    siteName: "Safiri Cover Kenya",
    title: "Safiri Cover Kenya - Affordable Daily Travel Insurance",
    description: "Travel Protected for Only KSh 10 Per Day",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#0F4C81" />
      </head>
      <body className={`${inter.className} bg-background text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}
