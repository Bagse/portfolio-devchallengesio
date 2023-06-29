import EducationCard from "./EducationCard";

function Education() {
  return (
    <div className="bg-white shadow-lg md:w-[413px] rounded-xl flex flex-col py-4 px-6 gap-7 md:gap-5">
      <h2 className="text-xl md:text-2xl">Education</h2>
      <EducationCard
        img="./img/oracle-alura.webp"
        date="Apr 2022 - Jan 2023"
        title="Front-end developer"
        descrip="Oracle + alura latam program where I learned front-end, backend and databases."
      />
      <EducationCard
        img="./img/freecodecamp.webp"
        date="Mar 2023"
        title="Responsive Web Design"
        descrip="Freecodecamp course to improve in responsive web design."
      />
      <EducationCard
        img="./img/andina-logo.webp"
        date="Mar 2017 - Aug 2019"
        title="systems engineering"
        descrip="Systems engineering career at the university Andina del Cusco."
      />
    </div>
  );
}

export default Education;
