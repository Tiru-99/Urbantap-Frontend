import UrbantapLogo from "@/assets/logo";

function Navbar() {
  return (
    <nav className="w-[1360px] h-[93px] bg-white py-5 pr-5 pl-10 absolute top-[30px] left-[40px] rounded-[80px] flex justify-between items-center gap-[135px]">
      <UrbantapLogo />
      <ul className="flex items-center p-0 gap-[40px] h-[20px] w-[746px] text-black">
        <li className="flex-none order-1 grow-0 text-[16px] font-semibold">About</li>
        <li className="flex-none order-1 grow-0 text-[16px] font-semibold">Why Urbantap?</li>
        <li className="flex-none order-1 grow-0 text-[16px] font-semibold">Our Reach</li>
        <li className="flex-none order-1 grow-0 text-[16px] font-semibold">Trusted by</li>
        <li className="flex-none order-1 grow-0 text-[16px] font-semibold">Book a demo</li>
        <li className="flex-none order-1 grow-0 text-[16px] font-semibold">Download app</li>
      </ul>

      <button className="text-black font-semibold py-2 px-5 text-[16px] mx-auto w-[164px] h-[53px] bg-gradient-to-b from-[#4DD969] to-[#28CD56] rounded-[30px]">
        Sign up now
      </button>
    </nav>
  );
}

export default Navbar;
