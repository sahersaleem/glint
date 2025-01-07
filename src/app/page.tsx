import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Clients from "@/components/Clients";
import WhyChoose from "@/components/WhyChoose";
import RecentWorks from "@/components/RecentWorks";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div className="bg-[url('/images/hero-bg.jpg.webp')] bg-cover bg-fixed w-[100vw] h-screen relative ">
      <div className="absolute top-0 left-0 w-full h-screen bg-[#000000] opacity-[0.6] "></div>
      <div className="absolute w-full   ">   <Navbar />
      <Hero /><Clients/><WhyChoose/> <RecentWorks/> <Contact/><Footer/></div>
   
    </div>
  );
}
