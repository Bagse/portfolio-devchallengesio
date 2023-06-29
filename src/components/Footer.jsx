function Footer() {
  return (
    <footer className="flex gap-1 place-content-center py-4 md:py-10 text-sm text-[#828282]">
        Created by{" "}
        <a
          href="https://github.com/Bagse"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold hover:underline hover:text-emerald-400"
        >
          Bagse
        </a>{" "}
        -{" "}
        <a
          href="https://devchallenges.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:font-bold hover:underline hover:text-emerald-400"
        >
          devChallenges.io
        </a>
    </footer>
  );
}

export default Footer;
