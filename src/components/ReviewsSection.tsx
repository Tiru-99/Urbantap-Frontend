import ImageAnimations from "./ReviewsImages";

const ReviewsSection: React.FC = () => {
  return (
    <div className="relative w-[1440px] h-[850px] bg-white">
      <div className="absolute w-[898px] h-[240px] left-[270px] top-[calc(50%-120px-25px)] text-center text-black text-[40px] font-medium leading-[120%]">
        The NFC-powered app has transformed how I connect with industry
        professionals in Dubai—effortless contact sharing and a major boost in
        productivity.
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
          Real estate broker at Finfarm
        </div>
      </div>
      <ImageAnimations />
    </div>
  );
};

export default ReviewsSection;
