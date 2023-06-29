import AdvancedProjects from "./components/AdvancedProjects";
import Education from "./components/Education";
import Footer from "./components/Footer";
import FrontDesignCard from "./components/FrontDesignCard";
import FrontSkillsCard from "./components/FrontSkillsCard";
import FrontendCard from "./components/FrontendCard";
import Hobbies from "./components/Hobbies";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <div className="py-5 px-2 lg:py-10 lg:px-24 flex flex-col md:flex-row gap-5">
        <section className="flex flex-col gap-6">
          <FrontendCard />
          <Education />
          <Hobbies />
        </section>

        <section className="flex flex-col gap-8">
          <div className="flex flex-col md:flex-row gap-6">
            <FrontSkillsCard name="front end" />
            <FrontDesignCard name="design" />
          </div>
          <Projects />
          <AdvancedProjects />
        </section>
      </div>
      <Footer />
    </>
  );
}

export default App;
