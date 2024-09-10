import { title } from "process";
import React from "react";

const Card3: React.FC<{ title?: string; desc?: string; img?: string,img2:string }> = ({
  title,
  desc,
  img,
  img2
}) => {
  return (
    <div className="bg-white rounded-lg border h-full p-4 flex items-center card-gray">
      {/* Content Section */}
      <div className="w-1/2 ml-4 order-2 sm:order-1">
        <h1 className="text-black text-lg font-bold">{title}</h1>
        <p className="text-gray-500 mt-2">{desc}</p>
      </div>

      {/* Image Section */}
      <div className="w-1/2 order-1 sm:order-2">
        <img
          src={`./assets/img/card/${img}.png`}
          alt="Card Image"
          className="w-full h-auto rounded-lg hidden md:block sm:hidden"
        />
        <img
          src={`./assets/img/card/${img2}.png`}
          alt="Placeholder Image"
          className="rounded-lg light-card-img md:hidden sm:block img-rounded"
        />
      </div>
    </div>
  );
};

export default Card3;
