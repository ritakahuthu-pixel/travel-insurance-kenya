import { Navbar } from "@components/layout/Navbar";
import { Hero } from "@components/sections/Hero";
import { Footer } from "@components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
