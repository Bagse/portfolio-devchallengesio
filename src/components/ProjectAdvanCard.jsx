import { MdArrowRightAlt } from "react-icons/md";

function ProjectAdvanCard({ img, name, description, demo }) {
  return (
    <div className="bg-white rounded-xl px-5 shadow-lg py-4 flex flex-col md:flex-row-reverse gap-4 md:gap-7">
      <img
        src={img}
        alt={name}
        className="rounded-lg w-[444px] h-full hover:scale-105 transition"
      />
      <div className="flex flex-col gap-3">
        <h3 className="capitalize text-sm md:text-base text-[#E0E0E0]">
          Advanced project
        </h3>
        <h2 className="capitalize text-[#333333] text-xl md:text-2xl font-bold">{name}</h2>
        <p className="text-base text-[#828282]">{description}</p>

        <div className="flex gap-2 items-center text-[#2F80ED]">
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className=" hover:underline hover:font-bold transition"
          >
            visit the site
          </a>
          <MdArrowRightAlt size={25} />
        </div>
      </div>
    </div>
  );
}

export default ProjectAdvanCard;
