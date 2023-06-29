import HobbieCard from "./HobbieCard";

function Hobbies() {
  return (
    <div className="bg-white shadow-lg md:w-[413px] rounded-xl flex flex-col py-4 px-6 gap-7 md:gap-5">
      <h2 className="text-xl md:text-2xl">Hobbies</h2>
      <HobbieCard
        img="./img/gaming.jpg"
        title="Gaming"
        descrip="I like to play video games in my free time."
      />
      <HobbieCard
        img="./img/programming.jpg"
        title="programming"
        descrip="I like to programming in my free time."
      />
      <HobbieCard
        img="./img/drawing.jpg"
        title="drawing"
        descrip="I like drawing sometimes."
      />
    </div>
  );
}

export default Hobbies;
