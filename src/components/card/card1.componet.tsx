
import React from 'react'

const Card1:React.FC<{title:string,desc:string,img:string,img2?:string}> = ({title,desc,img,img2}) => {
  return (
        <div className="col-span-1 ">
              <div className="bg-white rounded-lg border h-full p-4 card-gray">
                <div className="flex flex-row sm:flex-col sm:grid sm:grid-cols-1 gap-4">
                  {/* First Inner Column (Image) */}
                  <div className="w-1/2 card-img sm:w-full flex justify-center ">
                    <img
                      src={`./assets/img/card/${img}.png`}
                      alt="Placeholder Image"
                      className="rounded-lg light-card-img hidden md:block sm:hidden"
                    />
                    <img
                      src={`./assets/img/card/${img2}.png`}
                      alt="Placeholder Image"
                      className="rounded-lg light-card-img md:hidden sm:block img-rounded"
                    />
                  </div>
                  {/* Second Inner Column (Title and Paragraph) */}
                  <div className="w-1/2 sm:w-full flex flex-col justify-center">
                    <h2 className="text-lg font-bold text-black">
                      {title}
                    </h2>
                    <p className="text-gray-600">
                      {desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
  )
}

export default Card1
