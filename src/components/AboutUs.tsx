'use client'

import { Shield, MonitorSmartphone, Smile, Zap } from 'lucide-react';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ weight: ['400', '600', '700'], subsets: ['latin'] });

export default function AboutUs() {
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Transparent & Ethical",
      description: "At Urbantap, we prioritize transparency and ethical practices. Our clients can rely on us for honest communication, ensuring we meet all privacy and regulatory requirements. Trust is the foundation of our long-lasting relationships."
    },
    {
      icon: <MonitorSmartphone className="w-6 h-6 text-green-400" />,
      title: "Tech-Driven Transformation",
      description: "Urbantap leverages advanced technology to transform the way real estate professionals conduct business. With our tools, brokers can efficiently analyze data, make better decisions, and increase sales, all while staying ahead in the competitive Dubai market."
    },
    {
      icon: <Smile className="w-6 h-6 text-green-400" />,
      title: "User-Friendly & Accessible",
      description: "We believe in building relationships that are easy to navigate. Our platform is designed to be user-friendly, catering to both novice agents and experienced brokers. At Urbantap, we provide intuitive tools, making technology accessible to everyone."
    },
    {
      icon: <Zap className="w-6 h-6 text-green-400" />,
      title: "Innovative & Future-Ready",
      description: "Urbantap integrates the latest tech innovations to offer real-time market insights, personalized websites, and powerful CRM tools. We continuously evolve to meet the demands of a rapidly changing real estate landscape, delivering modern solutions that are both effective and scalable."
    }
  ];

  return (
    <div id='aboutus'>
      <div className='flex justify-center items-center min-h-screen w-full bg-[#011627] relative overflow-hidden'>
        <div className={`relative bg-[#011627] text-white overflow-hidden px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pb-32 ${inter.className} w-full max-w-7xl mx-auto`}>
          <div className="max-w-6xl mx-auto relative">
            {/* Header */}
            <div className="mb-8 sm:mb-12 lg:mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text">
                About Us
              </h2>
              <p className={`text-slate-400 max-w-2xl text-sm sm:text-base ${poppins.className}`}>
                At Urbantap, we are redefining the way real estate professionals connect, market, and grow their businesses in the fast-paced Dubai real estate market. As a technology-driven platform, Urbantap offers innovative solutions that help brokers, developers, and real estate agents elevate their presence and streamline their operations.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-start">
              <div className="grid-cols-1 lg:col-span-3 grid sm:grid-cols-2 gap-6 sm:gap-8">
                {values.map((value, index) => (
                  <div key={index} className="group space-y-3 sm:space-y-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-green-900/30 flex items-center justify-center">
                      {value.icon}
                    </div>
                    <h3 className={`text-lg sm:text-xl font-semibold text-white ${poppins.className}`}>
                      {value.title}
                    </h3>
                    <p className={`text-slate-400 text-xs sm:text-sm font-extralight leading-relaxed ${poppins.className}`}>
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional decorative elements */}
        </div>

        {/* Enhanced Background SVG Blob */}
        <svg
          className="hidden lg:block absolute lg:-bottom-48 lg:-right-60 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] opacity-100 -z-5"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="enhanced-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop stopColor="rgba(66, 185, 131, 0.8)" offset="0%" />
              <stop stopColor="rgba(42, 101, 191, 0.8)" offset="100%" />
            </linearGradient>
          </defs>
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="url(#enhanced-gradient)"
            strokeWidth="0.3"
          />
        </svg>

        <div className="hidden md:block absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-green-500/10 rounded-full blur-2xl -translate-x-1/3 translate-y-1/3 " />
        <div className="hidden md:block absolute top-0 right-0 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-emerald-500/10 rounded-full blur-2xl translate-x-1/3 -translate-y-1/3 " />
      </div>
    </div>
  );
}

