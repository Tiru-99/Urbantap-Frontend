import React from 'react'

const MobileCardComponent: React.FC<{ title?: string; desc?: string; img?: string,img2?:string }> = ({
    title,
    desc,
    img,
    img2
  })  => {
  return (
    <div className="w-100 mobile-card h-[151px] flex gap-[10px] items-center rounded-[30px] mx-[10px]  p-4 mb-2 bg-[#F8F9FC]">

    {/* First inner div with 80x80 dimensions, rounded and containing an image */}
    <div className="w-[80px] h-[80px] rounded-full overflow-hidden flex items-center justify-center bg-[#F8F9FC]">
      <img  src={`./assets/img/card/${img}.png`} alt="Small Image" className="w-[40px] h-[40px] object-cover" />
    </div>
    {/* Second inner div with text */}
    <div className="w-[172px] h-[91px] ms-1">
      <h2 className="text-[17px] font-semibold pb-1 leading-[21.25px] text-black">{title}</h2>
      <p className="text-[15px] font-normal leading-[20px] p-text pb-2">{desc}</p>
    </div>
  </div>
  )
}

export default MobileCardComponent
