import React from "react";

const Developer = () => {
  return (
    <div className="bg-gradient-to-bl from-blue-100 to-green-100 text-start py-8 px-4 md:hidden sm:block">
      <h1 className="text-4xl font-bold mb-4 text-black">Trusted by 1000+</h1>
      <h1 className="text-start text-4xl font-bold mb-4 text-black">Brokers &</h1>
      <h1 className="text-4xl font-bold mb-8 text-black">
        Developers<span className="text-[#0ECC88]">.</span>
      </h1>

      {/* Box Container */}
      <div className="flex flex-row gap-4">
        {/* Box 1 */}
        <div className="bg-white rounded-xl shadow-md p-4 w-1/3 h-20 flex items-center justify-center">
          <p className="text-black text-lg font-semibold">EMAAR</p>
        </div>

        {/* Box 2 */}
        <div className="bg-white rounded-xl shadow-md p-4 w-1/2 h-20 flex items-center  justify-center">
          <p className="text-black text-lg font-semibold">HIVE</p>
        </div>

       
      </div>

      {/* Second Row */}
      <div className="flex flex-row gap-4 mt-4">
        {/* Box 1 - First box in second row (half visible) */}
        <div className="bg-white rounded-xl shadow-md p-4 w-1/2 h-20 flex items-center justify-center -ml-20">
          <p className="text-black text-lg font-semibold">HIVE</p>
        </div>

        {/* Box 2 */}
        <div className="bg-white rounded-xl shadow-md p-4 w-1/3 h-20 flex items-center justify-center">
          <p className="text-black text-lg font-semibold">DAMAC</p>
        </div>

        {/* Box 3 */}
        <div className="bg-white rounded-xl shadow-md p-4 w-1/3 h-20 flex items-center justify-center">
          <p className="text-black text-lg font-semibold">Provident.</p>
        </div>
      </div>
    </div>
  );
};

export default Developer;