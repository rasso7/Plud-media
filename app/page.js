import About from "@/components/About";
import Client from "@/components/Client";
import Contact from "@/components/Contact";
import Events from "@/components/Event";
import Feature from "@/components/Feature";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import { Testimonials } from "@/components/testimonials";


export default function Home() {
  return (
    <>
    {/* <Hero1 /> */}
    <Hero />
    <About/>
    <Feature />
    <Client/>
    <Events/>
    <Testimonials/> 
    <Team/>
    <Contact/>
    <Footer/>
    </>
  );
}
