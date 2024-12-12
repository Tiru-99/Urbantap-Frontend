'use client'

import React from "react"

import Image from "next/image"

const companies = [
  { name: "Emaar", logo: "/assets/logos/emaar.png" },
  { name: "Hive", logo: "/assets/logos/hive.png" },
  { name: "Damac", logo: "/assets/logos/damac.png" },
  { name: "Patriot", logo: "/assets/logos/patriot.png" },
  { name: "Provident", logo: "/assets/logos/provident.png" },
  { name: "Sobha", logo: "/assets/logos/sobha.png" },
]

const companiesTop = [
  { name: "Patriot", logo: "/assets/logos/patriot.png" },
  { name: "Sobha", logo: "/assets/logos/sobha.png" },
  { name: "Emaar", logo: "/assets/logos/emaar.png" },
  { name: "Hive", logo: "/assets/logos/hive.png" },
  { name: "Damac", logo: "/assets/logos/damac.png" },
  { name: "Provident", logo: "/assets/logos/provident.png" },
]

const companiesBottom = [
  { name: "Advice", logo: "/assets/logos/advice.png" },
  { name: "Kaye & Co", logo: "/assets/logos/kaye.png" },
  { name: "Provident", logo: "/assets/logos/provident.png" },
  { name: "Dejavu", logo: "/assets/logos/dejavu.png" },
  { name: "Luxliving", logo: "/assets/logos/luxliving.png" },
  { name: "Texture", logo: "/assets/logos/texture.png" },
]

function MobileMarquee() {
  return (
    <div className="relative w-full overflow-hidden h-full">
      {/* Mobile Background Image */}
      <div className="absolute inset-0 -z-10 h-full">
        <Image
          src="/assets/bg.png"
          alt="Mobile background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>

      {/* Marquee Animation */}
      <div className="flex flex-col gap-4">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-mobile">
            {companies.concat(companies).map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl  p-4 flex items-center justify-center mx-2 w-[140px] h-[100px] flex-shrink-0"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={100}
                  height={33}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-reverse-mobile">
            {companies.concat(companies).map((company, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl  p-4 flex items-center justify-center mx-2 w-[140px] h-[100px] flex-shrink-0"
              >
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={100}
                  height={33}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}


function DesktopMarquee() {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="flex ">
        <div className="flex animate-marquee">
          {companiesTop.concat(companiesTop).map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm p-4 flex items-center justify-center mx-4 w-[200px] h-[120px] flex-shrink-0"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={120}
                height={40}
                className="max-w-[120px] w-full h-auto object-contain "
              />
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex ">
        <div className="flex animate-marquee-reverse">
          {companiesBottom.concat(companiesBottom).map((company, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-sm  p-4 flex items-center justify-center mx-4 w-[200px] h-[120px] flex-shrink-0"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={120}
                height={40}
                className="max-w-[120px] w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function TrustedBySection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-40 md:my-24 ">
      {/* Desktop Background SVG */}
      <div className="absolute inset-0 -z-10 h-full">
        <Image
          src="/assets/desktopbg.png"
          alt="Desktop background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
     
     {/* background image to render for the mobile menu */}
      <div className="absolute inset-0 -z-10 h-full block md:hidden">
        <Image
          src="/assets/bg.png"
          alt="Mobile background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      
      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-center text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 sm:mb-12 md:mb-16 px-4">
          Trusted by 1000+
          <br/> Brokers & Developers
          <span className="text-[#0ECC88]">.</span>
        </h2>
        
        {/* Mobile Grid View */}
        <div className="md:hidden">
          <MobileMarquee />
        </div>

        {/* Desktop Marquee View */}
        <div className="hidden md:block px-4 sm:px-6 lg:px-8">
          <DesktopMarquee />
        </div>
      </div>
    </section>
  )
}


