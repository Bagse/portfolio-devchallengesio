import ProgressBar from "./ProgressBar";

function FrontSkillsCard({ name }) {
  return (
    <div className="flex flex-col bg-white shadow-lg md:w-[415px] h-[303px] rounded-xl py-4 px-6">
      <h2 className="text-[16px] md:text-lg font-bold uppercase">{name}</h2>
      <div className="flex flex-col space-y-4 pt-3">
        <ProgressBar skill="react" percentage="80" />
        <ProgressBar skill="javascript" percentage="84" />
        <ProgressBar skill="css" percentage="90" />
        <ProgressBar skill="tailwind" percentage="80" />
        <ProgressBar skill="vite" percentage="93" />
        <ProgressBar skill="nextjs" percentage="75" />
      </div>
    </div>
  );
}

export default FrontSkillsCard;
