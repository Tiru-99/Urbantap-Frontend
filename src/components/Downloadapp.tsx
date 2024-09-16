import React from "react";

const Downloadapp = () => {
  return (
    <div className="download-app-section bg-white  md:hidden sm:block">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-4 bg-gradient-to-bl from-blue-100 to-green-100 inner-download">
        {/* First Column: Title, Paragraph, and Store Logos */}
        <div className="flex flex-col justify-center items-center text-start p-4 ">
          <h1 className="text-3xl sm:text-4xl font-bold text-black mb-4">
            Its your time to level up your game.
          </h1>
          <p className="text-black text-2xl mb-6 font-bold text-start">
            Download urbantap on your phone now!
          </p>
          <div className="flex justify-center gap-4 se">
            {/* App Store Logo */}
            {/* <img src="./appstore.png" alt="App Store" className="w-32 h-auto" />
      <img src="./playstore.png" alt="Play Store" className="w-32 h-auto" /> */}
            <button className="text-white font-semibold py-2 px-5 text-[16px] mx-auto w-[164px] h-[53px] bg-black rounded-[30px]">
              Join the waitlist
            </button>
          </div>
        </div>
        {/* Second Column: Background Image */}
        <div className="relative flex justify-center items-center">
          <div className="w-full h-full bg-cover bg-center rounded-lg">
            {/* <div className="rounded-lg p-4 text-center text-white bg-black/30">
        Optional content overlay here
        <h2 className="text-3xl font-bold">Amazing App</h2>
      </div> */}
          </div>
        </div>
      </div>
      <div className="download-image">
        <img src="./assets/phone.png" alt="" />
      </div>
    </div>
  );
};

export default Downloadapp;
