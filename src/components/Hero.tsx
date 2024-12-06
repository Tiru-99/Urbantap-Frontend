
import AppStoreButtons from "./AppStoreButtons";

export default function Hero() {
  return (
    <>
        <div
            className="w-full h-[850px] bg-white hidden md:block relative"
            id="about"
            style={{
              backgroundImage: 'url(/assets/backgroundsvg.jpeg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="absolute flex flex-col items-start w-[570px] h-[402px] top-[270px] left-[80px] gap-[40px]">
              <h1 className="text-black font-inter font-semibold tracking-tight text-[63px] leading-[71px]">
                One platform for the real estate ecosystem
                <span className="text-[#0ECC88]">.</span>
              </h1>

              <div className="flex flex-row gap-4">
                <AppStoreButtons />
              </div>
            </div>
          </div>
      <div className="grid grid-cols-1 gap-4 p-4 md:hidden mt-25 hero bg-main">
            {/* First row: h1 and paragraph */}
            <div className="flex flex-col items-start ml-4">
             
                <h1 className="text-3xl font-bold mb-2 max-w-sm">
                  One platform<br></br>for the real estate<br></br> ecosystem
                </h1>
             
              {/* <p className="text-base pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi.
              </p> */}
            </div>
            {/* Second row: App Store and Play Store images */}
            <div className="flex gap- text-start">
              {/* <button className="text-white font-semibold py-2 px-5 text-[16px] mx-auto w-[164px] h-[53px] bg-black rounded-[30px]">
                Join the waitlist
              </button> */}
              <div className="scale-90">
               <AppStoreButtons></AppStoreButtons>
              </div>
            </div>
            {/* Third row: Single image */}
            <div className="flex justify-center w-100 heroimg-div">
              <img
                src="./mobile.svg"
                alt="Single Image"
                className="w-full h-auto max-w-sm hero-img"
              />
            </div>
        </div>

    </>
  );
}
