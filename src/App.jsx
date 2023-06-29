
import AdvancedProjects from "./components/AdvancedProjects";
import FrontDesignCard from "./components/FrontDesignCard";
import FrontSkillsCard from "./components/FrontSkillsCard";
import FrontendCard from "./components/FrontendCard";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="py-5 px-3 lg:py-10 lg:px-24 flex flex-col md:flex-row gap-8">
      <section>
        <FrontendCard />
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
  );
}

export default App;
