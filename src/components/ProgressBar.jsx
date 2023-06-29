function ProgressBar({ percentage, skill }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="capitalize text-sm md:text-[16px]">{skill}</h2>
      <div className="relative w-[200px] h-[10px] bg-[#C4C4C4] rounded-full">
        <div
          className="absolute top-0 left-0 h-full bg-[#2F80ED] rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
