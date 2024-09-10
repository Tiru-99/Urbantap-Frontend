import UrbantapLogo from "@/assets/logo";

function Navbar() {
  return (
    <nav className="w-full h-[93px] bg-white py-5 pr-5 pl-10  absolute top-[30px] md:left-[40px] rounded-[80px] flex justify-between items-center gap-[135px]">
      <UrbantapLogo />
      <div className="hidden md:block">
      <ul className="flex items-center p-0 gap-[40px] h-[20px] w-[746px] text-black">
        <li className="flex-none order-1 grow-0 text-[16px] font-semibold" ><a href="#about">About</a></li>
        <li className="flex-none order-1 grow-0 text-[16px] font-semibold">Why Urbantap?</li>
        <li className="flex-none order-1 grow-0 text-[16px] font-semibold">Our Reach</li>
        <li className="flex-none order-1 grow-0 text-[16px] font-semibold" ><a href="#trust">Trusted by</a></li>
        <li className="flex-none order-1 grow-0 text-[16px] font-semibold">Book a demo</li>
        <li className="flex-none order-1 grow-0 text-[16px] font-semibold"><a href="#app">Download app</a></li>
      </ul>

      </div>
      <button className="text-black font-semibold py-2 px-2 text-[16px] mx-auto  w-full md:w-[164px] h-[53px] bg-gradient-to-b from-[#4DD969] to-[#28CD56] rounded-[30px]">
       <span className="hidden md:block"> Join the waitlist</span>
       <span className="md:hidden block"> sign up</span>
      </button>
    </nav>
  );
}

export default Navbar;
