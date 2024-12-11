

import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0A0B1A] text-white px-6 py-8 md:px-12 md:py-6 z-20 relative">
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

