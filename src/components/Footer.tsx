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


import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A0B1A] text-white px-6 py-8 md:px-12 md:py-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-8 md:space-y-0">
          {/* Logo and Copyright Section */}
          <div className="space-y-4 md:w-1/3">
            <Image
              src="/assets/urbantap.png"
              alt="UrbanTap"
              width={132}
              height={28}
              className="h-7 w-auto"
            />
            <div className="space-y-2 text-gray-400 text-sm">
              <p>© urbantap LLC. 2024</p>
              <p className="text-xs max-w-xs">
                © 2024 UrbanTap LLC. All trademarks, names, and logos are property of UrbanTap LLC and are registered or used in the UAE. Unauthorized use is prohibited.
              </p>
            </div>
          </div>

          {/* Links and Social Media Section */}
          <div className="flex flex-col md:items-center space-y-6 md:w-1/3">
            {/* Legal Links */}
            <div className="flex flex-col md:items-center space-y-3">
              <Link href="/privacy-policy" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-gray-300 transition-colors">
                Terms & Conditions
              </Link>
              <Link href="/legal" className="hover:text-gray-300 transition-colors">
                Legal
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* QR Codes Section - Hidden on Mobile */}
          <div className="hidden md:flex md:w-1/3 md:justify-end space-x-4">
            <div className="relative w-32 h-40">
              <Image
                src="/assets/qr1.png"
                alt="App Store QR Code"
                fill
                className="bg-white p-2 rounded-lg object-contain"
              />
            </div>
            <div className="relative w-32 h-40">
              <Image
                src="/assets/qr2.png"
                alt="Google Play QR Code"
                fill
                className="bg-white p-2 rounded-lg object-contain"
              />
            </div>
          </div>
        </div>
        
        {/* Download text - Only visible on desktop */}
        <div className="hidden md:block text-right mr-12 mt-2 text-sm text-gray-400">
          Scan to download the app
        </div>
      </div>
    </footer>
  )
}

