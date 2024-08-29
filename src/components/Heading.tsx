import React from "react";

const Heading = ({ title }: { title: string }) => {
  return (
    <div className="w-[738px] h-[143px] flex items-end text-center">
      <h1 className="font-inter font-semibold text-[67px] leading-[71px] text-black">
        {title} <span className="text-[#0ECC88]">.</span>
      </h1>
    </div>
  );
};

export default Heading;
