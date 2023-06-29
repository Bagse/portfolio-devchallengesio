function HobbieCard({ img, title, descrip }) {
  return (
    <div className="flex flex-col gap-4">
      <img
        src={img}
        alt="image gaming"
        className="w-[290px] md:w-[369px] h-[139px] rounded-lg object-cover"
      />
      <div className="flex flex-col gap-2">
        <h2 className="text-[#333333] md:text-lg font-bold capitalize">{title}</h2>
        <p className="text-[#828282] text-sm md:text-base">{descrip}</p>
      </div>
    </div>
  );
}

export default HobbieCard;
