import UrbantapLogoWhite from "@/assets/logo-white";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-[1440px] h-[315px] bg-[#0A1330] text-white flex flex-col items-center justify-center">
      <div className="absolute top-[65px] left-[94px]">
        <UrbantapLogoWhite />
      </div>
    </footer>
  );
};

export default Footer;
