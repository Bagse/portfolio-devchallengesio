function EducationCard({ img, date, title, descrip }) {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <img
        src={img}
        alt="education image"
        className=" md:w-[110px] md:h-[90px] object-fill rounded-lg"
      />
      <div className="flex flex-col gap-2">
        <h3 className="text-[#828282] text-xs md:text-sm capitalize">{date}</h3>
        <h2 className="text-[#333333] font-bold capitalize md:text-lg">{title}</h2>
        <p className="text-[#828282] text-sm md:text-base">{descrip}</p>
      </div>
    </div>
  );
}

export default EducationCard;
