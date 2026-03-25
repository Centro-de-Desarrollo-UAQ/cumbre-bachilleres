import About from "@/components/About";
import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <main className="">
        <div className=" w-full h-fit px-10 pt-4">
          <Hero />
        </div>

        <Counter />

        <About />
      </main>
    </div>
  );
}
