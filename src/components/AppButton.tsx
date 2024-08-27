import React from "react";

const AppButton = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <button className="flex items-center p-3 gap-1.5 w-[140px] h-[50px] bg-black shadow-lg rounded-lg relative">
      <div className="w-[17.72px] h-[21.78px] bg-white"></div>
      <div className="flex flex-col justify-center ml-2.5 text-white">
        <span className="text-[10px] font-medium absolute top-[13px] left-[29.08%]">
          {subtitle}
        </span>
        <span className="text-[14px] font-bold absolute top-[23px] left-[29.08%]">{title}</span>
      </div>
    </button>
  );
};

export default AppButton;
