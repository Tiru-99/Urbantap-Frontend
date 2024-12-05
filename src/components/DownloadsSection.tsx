import AppStoreButtons from "./AppStoreButtons";

interface BackgroundSvgProps extends React.SVGProps<SVGSVGElement> {}

export const BackgroundSvg: React.FC<BackgroundSvgProps> = (props) => (
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

const DownloadsSection = () => {
  return (
    <div className="relative h-[805px] w-full bg-white hidden md:block" id="app">
      <div className="absolute flex flex-col items-start w-[400px] h-[214px] top-[270px] left-[200px] gap-[30px]">
        <h1 className="text-black font-inter font-semibold tracking-tight text-[67px] leading-[71px]">
          Its time to level up your game
          <span className="text-[#0ECC88]">
          {" "}
          .
        </span>
        </h1>

        <p className="text-[#00000099] font-sans text-base font-bold leading-[25.6px]">
          Download Urbantap on your phone now!
        </p>

        <div className="flex flex-row gap-4">
          {/* <AppButton title="App Store" subtitle="Download on the" />
          <AppButton  title="Play Store" subtitle="Get it on" /> */}
          {/* <button className="text-white font-semibold py-2 px-5 text-[16px] mx-auto w-[164px] h-[53px] bg-black rounded-[30px]">
            Join the waitlist
          </button> */}
          <AppStoreButtons/>
        </div>
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <BackgroundSvg className="w-[1258px] h-[577px]" />
      </div>
      <div className="absolute top-1 right-0">
        <img className="w-auto h-[800px]" src="/assets/phone.png" />
      </div>
    </div>
  );
};

export default DownloadsSection;