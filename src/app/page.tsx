import CardsSection from "@/components/CardsSection";
import DownloadsSection from "@/components/DownloadsSection";
import Hero from "@/components/Hero";
import ReviewsSection from "@/components/ReviewsSection";
import TrustedBySection from "@/components/TrustedBySection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar/>
      <Hero />
      <CardsSection />
      {/* <CarouselSection /> */}
      {/* <Developer/> */}
      <TrustedBySection/>
      <ReviewsSection />
     
      <DownloadsSection />
      <Footer/>
      {/* <Downloadapp></Downloadapp> */}
      
    </>
  );
}
