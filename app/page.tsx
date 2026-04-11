import About from "@/components/About";
import Counter from "@/components/Counter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Location from "@/components/Location";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";

import CTAButton from "@/components/CTAButton";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="overflow-x-hidden">
        <div className="w-full h-fit px-4 md:px-10 pt-4">
          <Hero />
        </div>

        <Counter />
        <VideoSection
          src={
            "https://nathalia-dssb.github.io/cumbres-bachilleres-assets/invitacion_director_bachilleres.mp4"
          }
        />
        <CTAButton />
        <About />
        <Speakers />
        <Schedule />
        <Location />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
