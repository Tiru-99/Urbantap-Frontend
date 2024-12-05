import CardsSection from "@/components/CardsSection";
import CarouselSection from "@/components/CarouselSection";
import Developer from "@/components/Developer";
import DownloadsSection from "@/components/DownloadsSection";
import Downloadapp from "@/components/Downloadapp";
import Hero from "@/components/Hero";
import ReviewsSection from "@/components/ReviewsSection";
import TrustedBySection from "@/components/TrustedBySection";

export default function Home() {
  return (
    <>
      <Hero />
      <CardsSection />
      {/* <CarouselSection /> */}
      {/* <Developer/> */}
      <TrustedBySection/>
      <ReviewsSection />
     
      <DownloadsSection />
      <Downloadapp></Downloadapp>
      
    </>
  );
}
