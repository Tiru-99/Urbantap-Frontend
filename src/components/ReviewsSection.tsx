import React from "react";

const ReviewsSection: React.FC = () => {
  return (
    <div className="relative w-[1440px] h-[850px] bg-white">
      {/* Text Block */}
      {/* <div className="absolute w-[898px] h-[240px] left-[270px] top-[calc(50%-240px/2-25px)] flex items-end text-center text-black text-[40px] font-medium leading-[120%]">
        The NFC-powered app has transformed how I connect with industry professionals in
        Dubai—effortless contact sharing and a major boost in productivity. An essential tool for
        every real estate professional!
      </div> */}

      <div className="absolute w-[898px] h-[240px] left-[270px] top-[calc(50%-240px/2-25px)] flex items-end text-center text-black text-[40px] font-medium leading-[120%]">
        The NFC-powered app has transformed how I connect with industry professionals in
        Dubai—effortless contact sharing and a major boost in productivity.
          An essential tool for every real estate professional!
      </div>
        {/* // <span className="text-[#0ECC88]"> */}

      {/* Frame 53 */}
      <div className="absolute flex flex-col justify-center items-center w-[251px] h-[55px] left-[593px] top-[556px] gap-[10px]">
        <div className="w-[220px] h-[25px] text-black text-[20px] font-semibold leading-[125%] flex items-end">
          Abdul Mohammed Bari
        </div>
        <div className="w-[251px] h-[20px] text-center text-[16px] text-[#0A1330CC] font-normal leading-[125%] flex items-end">
          Real estate broker at Finfarm
        </div>
      </div>

      {/* Images */}
      {/* Replace 'path-to-your-image.png' with the actual path to your image */}
      <div
        className="absolute w-[57px] h-[57px] left-[574px] top-[42px] bg-cover bg-center"
        style={{ backgroundImage: "url('path-to-your-image-1.png')" }}
      ></div>
      <div
        className="absolute w-[57px] h-[57px] left-[70px] top-[26px] bg-cover bg-center"
        style={{ backgroundImage: "url('path-to-your-image-2.png')" }}
      ></div>
      <div
        className="absolute w-[57px] h-[57px] left-[312px] top-[127px] bg-cover bg-center"
        style={{ backgroundImage: "url('path-to-your-image-3.png')" }}
      ></div>
      <div
        className="absolute w-[57px] h-[57px] left-[1024px] top-[70px] bg-cover bg-center"
        style={{ backgroundImage: "url('path-to-your-image-4.png')" }}
      ></div>
      <div
        className="absolute w-[57px] h-[57px] left-[1296px] top-[178px] bg-cover bg-center"
        style={{ backgroundImage: "url('path-to-your-image-5.png')" }}
      ></div>
      <div
        className="absolute w-[57px] h-[57px] left-[1296px] top-[585px] bg-cover bg-center"
        style={{ backgroundImage: "url('path-to-your-image-6.png')" }}
      ></div>
      <div
        className="absolute w-[57px] h-[57px] left-[713px] top-[672px] bg-cover bg-center"
        style={{ backgroundImage: "url('path-to-your-image-7.png')" }}
      ></div>
      <div
        className="absolute w-[57px] h-[57px] left-[70px] top-[582px] bg-cover bg-center"
        style={{ backgroundImage: "url('path-to-your-image-8.png')" }}
      ></div>
      <div
        className="absolute w-[57px] h-[57px] left-[296px] top-[753px] bg-cover bg-center"
        style={{ backgroundImage: "url('path-to-your-image-9.png')" }}
      ></div>
      <div
        className="absolute w-[57px] h-[57px] left-[1166px] top-[794px] bg-cover bg-center"
        style={{ backgroundImage: "url('path-to-your-image-10.png')" }}
      ></div>

      {/* Arrows */}
      {/* <div className="absolute w-[36px] h-[36px] left-[160px] top-[426px] transform rotate-180"> */}
      {/* Arrow content here */}
      {/* </div>
      <div className="absolute w-[36px] h-[36px] left-[1280px] top-[426px] transform rotate-180"> */}
      {/* Arrow content here */}
      {/* </div> */}

      {/* Vectors */}
      {/* <div className="absolute border-2 border-black w-[36px] h-[36px] left-[86.74%] right-[-58.97%] top-[21.93%] bottom-[22.8%] transform -scale-x-100"> */}
      {/* Vector content here */}
      {/* </div> */}
      {/* <div className="absolute border-2 border-black w-[36px] h-[36px] left-[13.26%] right-[14.52%] top-[21.93%] bottom-[22.8%] transform scale-x-100"> */}
      {/* Vector content here */}
      {/* </div> */}
    </div>
  );
};

export default ReviewsSection;
