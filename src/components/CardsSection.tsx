
import Card3 from "./card/card3.component";
import MobileCardComponent from "./card/mobilecard.component";
import { Card , CardContent } from "./ui/card";
import Image from "next/image";


const CardsSection: React.FC = () => {
  return (
    <>
      {/* <div className="flex flex-col items-center justify-evenly h-[1152px] w-full bg-white">
        <Heading title="Packed with everything you need" />
        <img
          src={"/assets/cards.png"}
          height={1251}
          width={685}
          style={{ height: "685px", width: "1251px" }}
          alt="cards"
        />
      </div> */}
      <div className="bg-white w-full md:pt-16">
        <div className="container mx-auto px-4 bg-white ">
          <div className="h1-card hidden lg:block md:block ">
            <h1 className="text-4xl lg:text-4xl font-semibold tracking-tight fs-70 text-black text-center">
              Packed with {" "}
            </h1>
            <h1 className="text-4xl lg:text-4xl font-semibold tracking-tight fs-70 pt-8 text-black text-center">
            everything you need{""}&nbsp;<span className="green-dot">.</span>
            </h1>
          </div>
          <div className="h1-card block md:hidden mobile-pack">
            <h1 className="text-[100px] sm:text-4xl font-semibold lg:text-5xl fs-40 text-black md:text-center text-start">
              Packed with{" "}
            </h1>
            <h1 className="text-[10px] sm:text-4xl font-semibold lg:text-5xl fs-40 text-black md:text-center text-start flex-nowrap">
              everything you need{""}&nbsp;<span className="green-dot">.</span>
            </h1>
          </div>
        <div className="hidden md:block scale-90 pt-12 ">
          {/* First Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 card-div">
            {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4"> */}
            {/* First Column - First Card with Two Inner Columns */}

            {/* <Card1
              title="Connect & Explore"
              img="iphone"
              img2="explore"
              desc="Networking platform for every stackholder in real estate"
            /> */}

            <Card className="w-full max-w-xl mx-auto bg-[#F8F9FC]  h-[520px] rounded-3xl">
                  <CardContent className="flex flex-col items-center text-left p-8 space-y-6 ">
                    <div className="relative w-[280px] h-[450px] -mt-32">
                      <Image
                        src="/assets/img/card/iphone.png"
                        alt="iPhone showing Connect & Explore app interface"
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                    <div className="w-full space-y-2">
                      <h2 className="text-2xl font-semibold text-gray-900">
                        Connect & Explore
                      </h2>
                      <p className="text-gray-600 text-lg">
                        Networking platform for every stakeholder in real estate
                      </p>
                    </div>
                  </CardContent>
                
                </Card>
            {/* Second coloumn*/}

            <div className="col-span-1 flex flex-col gap-6">
                <Card className="flex items-center gap-4 p-4 bg-[#F8F9FC] transition-colors cursor-pointer h-[245px] w-full rounded-3xl">
                  <div className="relative h-full w-[200px]">
                    <Image
                      src="/assets/img/card/talent.png"
                      alt="Broker Database icon"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl text-gray-900">Broker Database</h3>
                    <p className="text-lg text-gray-500 ">Consolidated brokers data of UAE</p>
                  </div>
                </Card>

                <Card className="flex items-center gap-4 p-4 bg-[#F8F9FC] transition-colors cursor-pointer h-[245px] w-full rounded-3xl">
                  <div className="relative h-full w-[200px]">
                    <Image
                      src="/assets/img/card/broker.png"
                      alt="Talent Hub icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-2xl text-gray-900">Talent Hub</h3>
                    <p className="text-lg text-gray-500">Job posting & Talent Acquisition</p>
                  </div>
                </Card>
            </div>

            {/* Third Column - One Card */}
              <Card className="w-full max-w-xl mx-auto bg-[#F8F9FC]  h-[520px] rounded-3xl">
                    <CardContent className="flex flex-col items-center text-left p-8 space-y-6 ">
                      <div className="relative w-[280px] h-[450px] -mt-32">
                        <Image
                          src="/assets/img/card/iphone2.png"
                          alt="iPhone showing Connect & Explore app interface"
                          fill
                          className="object-contain"
                          priority
                        />
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-2xl font-semibold text-gray-900">
                          Connect & Explore
                        </h2>
                        <p className="text-gray-600 text-lg">
                          Networking platform for every stakeholder in real estate
                        </p>
                      </div>
                    </CardContent>
              </Card>
          </div>

          {/* Second Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 card-div ">
            <Card3
              title="Expanded Reach"
              desc="Brand Awareness for developers their projects"
              img="wall"
              img2="expand"
            />
            <Card3
              title="Curated Real Estate Listings"
              img="bhk"
              desc="A Moderated feed of real estate asks & sells available across UAE"
              img2="cur"
            />
          </div>
          </div>
        </div>
      </div>

      <div className="bg-white  section-width block md:hidden pb-2">
            <Card className="w-[340px] max-w-xl mx-auto bg-[#F8F9FC] h-auto rounded-3xl mb-2">
              <CardContent className="flex flex-col items-center text-left p-4 space-y-4">
                <div className="relative w-[160px] h-[320px]">
                  <Image
                    src="/assets/img/card/iphone2.png"
                    alt="iPhone showing Connect & Explore app interface"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="w-full space-y-2">
                  <h2 className="text-lg font-semibold text-gray-900">
                    Your Customizable feed <br></br>Home Feed
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum
                  </p>
                </div>
              </CardContent>
            </Card>

        <MobileCardComponent
          title="Broker Database"
          desc="Consolidation brokers data of UAE "
          img="broker1"
        />
        <MobileCardComponent
          title="Talent Hub"
          desc="Job posting & Talent Acquisition"
          img="talent1"
        />
      <Card className="w-[340px] max-w-xl mx-auto bg-[#F8F9FC] h-auto rounded-3xl mb-2">
          <CardContent className="flex flex-col items-center text-left p-4 space-y-4">
            {/* Image Section */}
            <div className="relative w-[160px] h-[320px]">
              <Image
                src="/assets/img/card/iphone.png"
                alt="iPhone showing Connect & Explore app interface"
                fill
                className="object-contain"
                priority
              />
            </div>
            {/* Text Section */}
            <div className="w-full space-y-2">
              <h2 className="text-lg font-semibold text-gray-900">
                Connect & Explore
              </h2>
              <p className="text-gray-600 text-sm">
                Networking platform for every stakeholder in real estate
              </p>
            </div>
          </CardContent>
        </Card>

        <MobileCardComponent
          title="Expanded Reach"
          desc="Brand Awareness for developers & their projects"
          img="expand1"
          img2="expand1"
        />
        <MobileCardComponent
          title="Curated Real Estate Listings"
          img="cur1"
          desc="A Moderated feed of real estate asks & sells available across UAE"
          img2="cur1"
        />
      </div>
    </>
  );
};

export default CardsSection;
