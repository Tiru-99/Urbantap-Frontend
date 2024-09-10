// import UrbantapLogoWhite from "@/assets/logo-white";
// import { SOCIAL_ICONS_SVGS } from "@/assets/social-icons";
// import React from "react";

// const Footer: React.FC = () => {
//   return (
//     <footer className="relative w-[1440px] h-[315px] bg-[#0A1330] text-white flex flex-col items-center justify-center">
//       <div className="absolute top-[65px] left-[94px]">
//         <UrbantapLogoWhite />
//         <div className="flex flex-col justify-center items-start p-0 gap-[10px] absolute w-[334px] h-[102px] top-[80px]">
//           <h1 className="w-[283px] h-[20px] font-inter font-semibold text-[16px] leading-[125%] flex items-end text-[#D5F6FB] opacity-30">
//             © urbantap LLC. 2024
//           </h1>
//           <p className="w-[334px] h-[72px] font-inter font-normal text-[14px] leading-[125%] flex items-end text-white opacity-30">
//             © 2024 UrbanTap LLC. All trademarks, names, and logos are property
//             of UrbanTap LLC and are registered or used in the UAE. Unauthorized
//             use is prohibited.
//           </p>
//         </div>
//         <div className="absolute w-[201px] h-[147px] left-[609px] top-[35px] flex flex-col items-start gap-[25px]">
//           {/* Frame 26 */}
//           <div className="flex flex-col items-start gap-[19px] w-[201px] h-[98px]">
//             <div className="flex items-end w-[201px] h-[20px] text-[#F3F5F8] font-inter font-medium text-[16px] leading-[125%]">
//               Privacy Policy
//             </div>
//             <div className="flex items-end w-[201px] h-[20px] text-[#F3F5F8] font-inter font-medium text-[16px] leading-[125%]">
//               Terms & Conditions
//             </div>
//             <div className="flex items-end w-[201px] h-[20px] text-[#F3F5F8] font-inter font-medium text-[16px] leading-[125%]">
//               Legal
//             </div>
//           </div>

//           {/* Frame 55 */}
//           <div className="flex flex-row items-center gap-[35px] w-[201px] h-[24px]">
//             {SOCIAL_ICONS_SVGS.map((icon) => (
//               <div key={icon.id} className="relative w-[24px] h-[24px]">
//                 <div className="absolute left-[24.32%] right-[24.32%]">
//                   {icon.svg}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import UrbantapLogoWhite from "@/assets/logo-white";
import { SOCIAL_ICONS_SVGS } from "@/assets/social-icons";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full h-auto bg-[#0A1330] text-white flex flex-col items-start px-4 sm:px-8 py-8 sm:py-12">
      <div className="w-full max-w-[1440px] flex flex-col sm:flex-row justify-between">
        {/* Left side - Logo and text */}
        <div className="flex flex-col items-start sm:items-start">
          <UrbantapLogoWhite />
          <div className="flex flex-col justify-center items-start p-0 gap-2 mt-4">
            <h1 className="text-sm font-semibold leading-[125%] text-[#D5F6FB] opacity-30">
              © urbantap LLC. 2024
            </h1>
            <p className="text-xs sm:text-sm leading-[125%] text-white opacity-30 text-left">
              © 2024 UrbanTap LLC. All trademarks, names, and logos are property
              of UrbanTap LLC and are registered or used in the UAE.
              Unauthorized use is prohibited.
            </p>
          </div>
        </div>

        {/* Right side - Links and social icons */}
        <div className="flex flex-col items-start sm:items-start mt-6 sm:mt-0">
          <div className="flex flex-col items-start sm:items-start gap-4">
            <div className="text-sm font-medium text-[#F3F5F8]">
              Privacy Policy
            </div>
            <div className="text-sm font-medium text-[#F3F5F8]">
              Terms & Conditions
            </div>
            <div className="text-sm font-medium text-[#F3F5F8]">Legal</div>
          </div>
          <div className="flex flex-row items-center gap-6 mt-4">
            {SOCIAL_ICONS_SVGS.map((icon) => (
              <div key={icon.id} className="w-6 h-6">
                {icon.svg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;