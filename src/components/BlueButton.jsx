function BlueButton({demo}) {
  return (
    <button className="bg-[#2F80ED] px-5 py-1 rounded-md hover:scale-105 transition">
      <a
        href={demo}
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-lg capitalize font-bold"
      >
        demo
      </a>
    </button>
  );
}

export default BlueButton;
