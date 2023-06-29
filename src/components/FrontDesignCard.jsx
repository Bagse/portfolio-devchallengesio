import ProgressBar from "./ProgressBar"

function FrontDesignCard({name}) {
  return (
    <div className="flex flex-col bg-white shadow-lg md:w-[415px] h-[157px] rounded-xl py-4 px-6">
      <h2 className="text-[16px] md:text-lg font-bold uppercase">{name}</h2>
      <div className="flex flex-col space-y-4 pt-3">
        <ProgressBar skill="figma" percentage="50" />
        <ProgressBar skill="photoshop" percentage="30" />
      </div>
    </div>
  )
}

export default FrontDesignCard