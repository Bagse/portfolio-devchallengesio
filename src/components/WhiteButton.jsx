function WhiteButton({code}) {
  return (
    <button className="outline outline-1 outline-[#2F80ED] px-5 py-1 rounded-md hover:scale-105 transition">
      <a
        href={code}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[#2F80ED] text-lg capitalize font-bold"
      >
        code
      </a>
    </button>
  );
}

export default WhiteButton;
