import Image from "next/image";
import Hero from "@/components/Hero";
import About from "./About/page";
import Contact from "./Contact/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <About/>
      <Contact />
    </div>
  )}