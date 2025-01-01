"use client";

import React from "react";
import { useState, useEffect } from "react";
import ImageAnimations from "./ReviewsImages";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import TabletReviewsSection from "./TableReviewsSection";

const reviews = [
  {
    text: "The NFC-powered app has transformed how I connect with industry professionals in Dubai—effortless contact sharing and a major boost in productivity.",
    highlight: "An essential tool for every real estate professional!",
    name: "Abdul Mohammed Bari",
    position: "Broker at AMS Real Estate"
  },
  {
    text: "This innovative app has revolutionized my networking approach in the Dubai real estate market. It's incredibly efficient and user-friendly.",
    highlight: "A game-changer for real estate networking!",
    name: "Sarah Al-Maktoum",
    position: "Senior Property Consultant"
  },
  {
    text: "The seamless integration of NFC technology has significantly improved my ability to connect with clients and partners in the UAE property sector.",
    highlight: "Highly recommended for all real estate professionals!",
    name: "Ahmed Hassan",
    position: "Real Estate Investment Advisor"
  }
];

const ReviewsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalReviews = reviews.length;

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000, stopOnInteraction: false })]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.on('select', () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  return (
    <div className="w-full">
      {/* Desktop View */}
      <div className="hidden sm:hidden md:hidden lg:flex lg:justify-center lg:items-center w-full">
        <div className="w-full max-w-[1440px] relative">
          <ImageAnimations>
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
              className="w-full"
              ref={emblaRef}
            >
              <CarouselContent>
                {reviews.map((review, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-[850px] bg-white flex flex-col justify-center items-center">
                      <div className="w-[898px] h-[240px] text-center text-black text-[40px] font-medium leading-[120%]">
                        {review.text}
                        <span className="text-[#0ECC88]">
                          {" "}
                          {review.highlight}
                        </span>
                      </div>

                      <div className="flex flex-col justify-center items-center w-[251px] mt-8">
                        <div className="text-black text-[20px] font-semibold leading-[125%] text-center">
                          {review.name}
                        </div>
                        <div className="text-center text-[16px] text-[#0A1330CC] font-normal leading-[125%]">
                          {review.position}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2">
                <ChevronLeft className="h-6 w-6" />
              </CarouselPrevious>
              <CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2">
                <ChevronRight className="h-6 w-6" />
              </CarouselNext>
            </Carousel>
          </ImageAnimations>
        </div>
      </div>

      {/* Tablet View */}
      <div className="hidden md:flex lg:hidden w-[768px]">
        <TabletReviewsSection reviews={reviews}></TabletReviewsSection>
      </div>

      {/* Mobile View */}
      <div className=" md:hidden w-full max-w-[1440px] h-auto bg-white lg:h-[850px] pt-10">
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
                <div className="relative w-full h-auto bg-white lg:h-[850px] px-4 py-8 flex flex-col justify-center items-center">
                  <div className="w-full h-auto lg:w-[898px] lg:h-[240px] bg-white mx-auto text-center px-4 lg:px-0 text-black text-[20px] lg:text-[40px] font-medium leading-[140%] lg:leading-[120%]">
                    <p className="text-start">
                      "{review.text}"
                    </p>
                    <p className="text-[#0ECC88] mt-4 text-start">
                      {review.highlight}
                    </p>
                  </div>
                  <div className="flex flex-col items-start w-full mt-8 pl-5">
                    <div className="text-black text-[18px] lg:text-[20px] font-semibold leading-[125%] text-start">
                      {review.name}
                    </div>
                    <div className="text-[14px] lg:text-[16px] text-[#0A1330CC] font-normal leading-[125%] text-start">
                      {review.position}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center space-x-4 pb-10">
            <CarouselPrevious className="relative inset-0 translate-y-0">
              <ChevronLeft className="h-6 w-6" />
            </CarouselPrevious>
            <CarouselNext className="relative inset-0 translate-y-0">
              <ChevronRight className="h-6 w-6" />
            </CarouselNext>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default ReviewsSection;
