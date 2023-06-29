import BlueButton from "./BlueButton";
import WhiteButton from "./WhiteButton";

function ProjectCard({img, name, description, demo, code}) {
  return (
    <div className="bg-white rounded-xl px-5 shadow-lg py-4 flex flex-col md:flex-row gap-4">
      <img
        src={img}
        alt={name}
        className="rounded-lg w-[322px] hover:scale-105 transition"
      />
      <div className="flex flex-col gap-3">
        <ul className="uppercase flex gap-3 text-base">
          <li>#vitejs</li>
          <li>#tailwind</li>
          <li>#responsive</li>
        </ul>
        <h2 className="capitalize text-[#333333] text-2xl font-bold">{name}</h2>
        <p className="text-base text-[#828282]">
          {description}
        </p>
        <div className="flex gap-3">
          <BlueButton demo={demo} />
          <WhiteButton code={code} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
