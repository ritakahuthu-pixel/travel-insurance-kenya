import { Navbar } from "@components/layout/Navbar";
import { Hero, Benefits, HowItWorks, Testimonials, FAQ } from "@components/sections";
import { Footer } from "@components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
