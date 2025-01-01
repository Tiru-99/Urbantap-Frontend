"use client";

import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

interface Review {
  text: string;
  highlight: string;
  name: string;
  position: string;
}

interface TabletReviewsSectionProps {
  reviews: Review[];
}

const TabletReviewsSection: React.FC<TabletReviewsSectionProps> = ({ reviews }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  return (
    <div className="w-full hidden lg:hidden md:flex h-auto bg-white py-8">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        className="section-width"
        ref={emblaRef}
      >
        <CarouselContent>
          {reviews.map((review, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-auto bg-white px-6 py-10 flex flex-col justify-center items-center">
                <div className="w-full max-w-[600px] text-center text-black text-[28px] font-medium leading-[130%]">
                  <p>"{review.text}"</p>
                  <p className="text-[#0ECC88] mt-4">{review.highlight}</p>
                </div>

                <div className="flex flex-col mt-8">
                  <div className="text-black text-[18px] font-semibold leading-[125%] text-center">
                    {review.name}
                  </div>
                  <div className=" text-[15px] text-[#0A1330CC] font-normal leading-[125%] text-center">
                    {review.position}
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center space-x-4 mt-6">
          <CarouselPrevious className="relative inset-0 translate-y-0">
            <ChevronLeft className="h-6 w-6" />
          </CarouselPrevious>
          <CarouselNext className="relative inset-0 translate-y-0">
            <ChevronRight className="h-6 w-6" />
          </CarouselNext>
        </div>
      </Carousel>
    </div>
  );
};

export default TabletReviewsSection;

