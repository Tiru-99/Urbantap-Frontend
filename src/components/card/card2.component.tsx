import { title } from "process";
import React from "react";

const Card2: React.FC<{ title?: string; desc?: string; img?: string }> = ({
  title,
  desc,
  img,
}) => {
  return (
    <div className="col-span-1 flex flex-col gap-4 sm:gap-4">
      <div className="bg-white rounded-lg border h-full p-4 card-gray">
        <div className="flex flex-row items-center gap-4">
          {/* Image Side */}
          <div className="w-1/2">
            <img
              src={`./assets/img/card/${img}.png`}
              alt="Placeholder Image"
              className="img-rounded"
            />
          </div>
          {/* Content Side */}
          <div className="w-1/2">
            <h1 className="text-lg font-bold text-black">{title}</h1>
            <p className="text-gray-600">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
