"use client";
import ImageAnimations from "./ReviewsImages";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
const ReviewsSection: React.FC = () => {
  return (
    <>
      <div className=" hidden md:block section-width relative">
        <AwesomeSlider className="section-width">
          <div className="relative w-[1440px] h-[850px] bg-white hidden md:block">
            <div className="absolute w-[898px] h-[240px] left-[270px] top-[calc(50%-120px-25px)] text-center text-black text-[40px] font-medium leading-[120%]">
              The NFC-powered app has transformed how I connect with industry
              professionals in Dubai—effortless contact sharing and a major
              boost in productivity.
              <span className="text-[#0ECC88]">
                {" "}
                An essential tool for every real estate professional!
              </span>
            </div>

            <div className="absolute flex flex-col justify-center items-center w-[251px] h-[55px] left-[593px] top-[556px] gap-[10px]">
              <div className="w-[220px] h-[25px] text-black text-[20px] font-semibold leading-[125%] flex items-end">
                Abdul Mohammed Bari
              </div>
              <div className="w-[220px] h-[20px] text-center text-[16px] text-[#0A1330CC] font-normal leading-[125%] flex items-end">
                Broker at AMS Real Estate
              </div>
            </div>
          </div>
        </AwesomeSlider>
        <ImageAnimations />
      </div>


      <div className="relative w-full h-auto bg-white lg:h-[850px] md:hidden sm:block bg-white">
      <AwesomeSlider className="section-width">
        
        <div className="relative w-full h-auto bg-white lg:h-[850px] md:hidden sm:block bg-white">
          {/* Review Text Section */}
          <div className="w-full h-auto lg:w-[898px] lg:h-[240px] bg-white mx-auto text-center lg:text-left px-4 lg:px-0 text-black text-[20px] lg:text-[40px] font-medium leading-[140%] lg:leading-[120%] pt-10 lg:mt-0">
            <p className="block">
              "The NFC-powered app has transformed how I connect with industry
              professionals in Dubai—
            </p>
            <p className="block">
              effortless contact sharing and a major boost in productivity."
            </p>
            <p className="block text-[#0ECC88] mt-4">
              An essential tool for every real estate professional!
            </p>
          </div>

          {/* Reviewer Info */}
          <div className="flex flex-col justify-center items-center w-full h-auto lg:w-[251px] lg:h-[55px] mx-auto mt-10 lg:mt-0">
            <div className="w-full lg:w-[220px] text-black text-[18px] lg:text-[20px] font-semibold leading-[125%] text-center lg:text-left">
              Abdul Mohammed Bari
            </div>
            <div className="w-full lg:w-[220px] text-[14px] lg:text-[16px] text-[#0A1330CC] font-normal leading-[125%] text-center lg:text-left">
              Broker at AMS Real Estate
            </div>
          </div>

          {/* Image animations */}
          {/* <ImageAnimations /> */}
        </div>
        </AwesomeSlider>
      </div>
    </>
  );
};

export default ReviewsSection;
