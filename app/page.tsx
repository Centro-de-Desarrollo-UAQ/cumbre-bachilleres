import About from "@/components/About";
import Counter from "@/components/Counter";
import Footer from "@/components/Footer";

import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <div className=" w-full h-fit px-10 pt-4">
          <Hero />
        </div>

        <Counter />
        <VideoSection
          src={
            "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
          }
        />
        <About />
      </main>
      <Footer />
    </div>
  );
}
