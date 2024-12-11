import React from "react";
import Image from "next/image";

interface Card3Props {
  title?: string;
  desc?: string;
  img: string;
}

const Card3: React.FC<Card3Props> = ({ title, desc, img }) => {
  return (
    <div className="bg-[#F8F9FC] rounded-lg border h-full p-4 flex flex-col sm:flex-row items-center card-gray">
      {/* Image Section */}

      {/* Content Section */}
      <div className="w-full sm:w-1/2">
        {title && <h2 className="text-black text-2xl font-semibold px-4">{title}</h2>}
        {desc && <p className="text-gray-500 mt-2 px-4 text-lg">{desc}</p>}
      </div>

      {/* Image Section */}
      <div className="w-full sm:w-2/5 card-img mb-4 sm:mb-0 sm:mr-4">
        <Image
          src={`/assets/img/card/${img}.png`}
          alt={title || "Card Image"}
          width={500}
          height={300}
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default Card3;

