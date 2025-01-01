'use client'

import UrbantapLogo from "@/assets/logo"
import { Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import { Menu, X } from 'lucide-react'
import { Link } from "react-scroll"

const navItems = [
  { href: "about", label: "About" , },
  { href: "why", label: "Why Urbantap?" },
  { href: "reach", label: "Our Reach" },
  { href: "trusted-by", label: "Trusted by" },
  { href: "demo", label: "Book a demo" },
  { href: "app", label: "Download app" },
]

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <li className="flex-none text-[16px] font-semibold">
      <Link to={href} smooth={true} duration={500} className="hover:text-[#28CD56] transition-colors">
        {label}
      </Link>
    </li>
  )
}

function Navbar() {
  return (
    <header className="w-full flex justify-center absolute -translate-x-3 sm:-translate-x-0 top-[30px] z-10 md:px-12">
      {/* Desktop View */}
      <nav className="w-full max-w-[1360px] h-[80px] bg-white py-10 px-5 md:px-8 shadow-sm md:justify- rounded-[80px] lg:flex justify-between items-center hidden">
        <div className="scale-75 -ml-4 sm:scale-100 sm:ml-0">
          <UrbantapLogo />
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center p-0 md:gap-[8px] lg:gap-[20px] xl:gap-[40px] h-[20px] text-black">
            {navItems.map((item) => (
              <NavItem key={item.href} {...item} />
            ))}
          </ul>
        </div>
        <button className="text-black font-semibold py-2 px-4 text-[16px] w-auto lg:w-[100px] xl:w-[164px] h-[45px] bg-gradient-to-b from-[#4DD969] to-[#28CD56] rounded-[30px] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#28CD56] focus:ring-opacity-50">
          <span className="hidden md:block">Join the waitlist</span>
          <span className="md:hidden">Sign up</span>
        </button>
      </nav>
      
      {/* Mobile View */}
      <nav className="lg:hidden w-full flex max-w-[1360px] h-[80px] bg-white py-10 px-5 md:px-8 shadow-sm rounded-[80px] justify-between items-center">
        <div className="scale-75 -ml-4 sm:scale-100 sm:ml-0">
          <UrbantapLogo />
        </div>   

        <Sheet>   
          <SheetTrigger asChild>
            <button className="text-black" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          
         
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <ul className="flex flex-col space-y-4 pt-12">
              {navItems.map((item) => (
                <NavItem key={item.href} {...item} />
              ))}
            </ul>
          
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}

export default Navbar

