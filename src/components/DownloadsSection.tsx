import React from "react";
import AppStoreButtons from "./AppStoreButtons";

interface BackgroundSvgProps extends React.SVGProps<SVGSVGElement> {}

const BackgroundSvg: React.FC<BackgroundSvgProps> = (props) => (
  <svg
    width={1258}
    height={557}
    viewBox="0 0 1258 557"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <mask
      id="mask0_405_2591"
      style={{
        maskType: "alpha",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={1258}
      height={557}
    >
      <rect width={1258} height={557} rx={50} fill="#D9D9D9" />
    </mask>
    <g mask="url(#mask0_405_2591)">
      <rect x={-113} y={-25} width={1459} height={637} fill="#F3F6FA" />
      <g opacity={0.4} filter="url(#filter0_f_405_2591)">
        <ellipse
          cx={17.5}
          cy={593.5}
          rx={248.5}
          ry={374.5}
          transform="rotate(90 17.5 593.5)"
          fill="#85FF9A"
        />
      </g>
      <g opacity={0.4} filter="url(#filter1_f_405_2591)">
        <ellipse
          cx={1220}
          cy={204.5}
          rx={248.5}
          ry={374}
          transform="rotate(90 1220 204.5)"
          fill="#4285F4"
        />
      </g>
    </g>
    <defs>
      <filter
        id="filter0_f_405_2591"
        x={-715.87}
        y={-13.8695}
        width={1466.74}
        height={1214.74}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={179.435}
          result="effect1_foregroundBlur_405_2591"
        />
      </filter>
      <filter
        id="filter1_f_405_2591"
        x={487.13}
        y={-402.87}
        width={1465.74}
        height={1214.74}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feGaussianBlur
          stdDeviation={179.435}
          result="effect1_foregroundBlur_405_2591"
        />
      </filter>
    </defs>
  </svg>
);

const DownloadSection: React.FC = () => {
  return (
    <div className="relative w-full bg-white" id="app">
      {/* Mobile version */}
      <div className="md:hidden">
        <div className="download-app-section bg-white">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-4 bg-gradient-to-bl from-blue-100 to-green-100 inner-download">
            {/* First Column: Title, Paragraph, and Store Logos */}
            <div className="flex flex-col justify-center text-start p-4">
              <h1 className="mobileapp-h1 text-black font-semibold tracking-tight">
                Its your time to
              </h1>
              <h1 className="mobileapp-h1 text-black mb-4 font-bold tracking-tight">
                level up your game.
              </h1>
              <div className="w-[156px]">
                <p className="text-black mobileapp-p mb-6 text-start">
                  Download urbantap on your phone now!
                </p>
              </div>
              <div className="flex justify-center gap-4 scale-90">
                <AppStoreButtons />
              </div>
            </div>
            {/* Second Column: Background Image */}
            <div className="relative flex justify-center items-center">
              <div className="w-full h-full bg-cover bg-center rounded-lg"></div>
            </div>
          </div>
          <div className="download-image">
            <img src="./assets/phone.png" alt="Phone" />
          </div>
        </div>
      </div>

      {/* Desktop version */}
      <div className="hidden md:block h-[805px] relative">
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-[1258px] h-[577px]">
            <BackgroundSvg className="w-full h-full" />
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute flex flex-col items-start w-[400px] h-[214px] top-[100px] left-[100px] gap-[30px]">
                <h1 className="text-black font-inter font-semibold tracking-tight text-[67px] leading-[71px]">
                  Its time to level up your game
                  <span className="text-[#0ECC88]">.</span>
                </h1>
                <p className="text-[#00000099] font-sans text-base font-bold leading-[25.6px]">
                  Download Urbantap on your phone now!
                </p>
                <div className="flex flex-row gap-4">
                  <AppStoreButtons />
                </div>
              </div>
              <div className="absolute top-0 right-0 h-full flex items-center scale-[153%]">
                <img className="h-full w-auto object-contain" src="/assets/phone.png" alt="Phone" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadSection;

