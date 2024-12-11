import UrbantapLogo from "@/assets/logo";

function Navbar() {
  return (
    <header className="w-full flex justify-center absolute top-[30px] z-10 md:px-12">
      <nav className="w-full max-w-[1360px] h-[80px] bg-white py-10 px-5 md:px-8 shadow-sm rounded-[80px] flex justify-between items-center">
        <div className="scale-75 -ml-4 sm:scale-100 sm:ml-0">
          <UrbantapLogo />
        </div>
        <div className="hidden md:block">
          <ul className="flex items-center p-0 gap-[40px] h-[20px] text-black">
            <li className="flex-none text-[16px] font-semibold"><a href="#about" className="hover:text-[#28CD56] transition-colors">About</a></li>
            <li className="flex-none text-[16px] font-semibold"><a href="#why" className="hover:text-[#28CD56] transition-colors">Why Urbantap?</a></li>
            <li className="flex-none text-[16px] font-semibold"><a href="#reach" className="hover:text-[#28CD56] transition-colors">Our Reach</a></li>
            <li className="flex-none text-[16px] font-semibold"><a href="#trust" className="hover:text-[#28CD56] transition-colors">Trusted by</a></li>
            <li className="flex-none text-[16px] font-semibold"><a href="#demo" className="hover:text-[#28CD56] transition-colors">Book a demo</a></li>
            <li className="flex-none text-[16px] font-semibold"><a href="#app" className="hover:text-[#28CD56] transition-colors">Download app</a></li>
          </ul>
        </div>
        <button className="text-black font-semibold py-2 px-4 text-[16px] w-auto md:w-[164px] h-[45px] bg-gradient-to-b from-[#4DD969] to-[#28CD56] rounded-[30px] hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-[#28CD56] focus:ring-opacity-50">
          <span className="hidden md:block">Join the waitlist</span>
          <span className="md:hidden">Sign up</span>
        </button>
      </nav>
    </header>
  );
}
export default Navbar;
