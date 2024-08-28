import Heading from "./Heading";

const CardsSection: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-evenly h-[1152px] w-[1440px] bg-white">
      <Heading title="Packed with everything you need" />
      <img
        src={"/assets/cards.png"}
        height={1251}
        width={685}
        style={{ height: "685px", width: "1251px" }}
        alt="cards"
      />
    </div>
  );
};

export default CardsSection;
