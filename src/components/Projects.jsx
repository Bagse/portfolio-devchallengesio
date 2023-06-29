import ProjectCard from "../components/ProjectCard";
import Bar from "../components/Bar";

function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <Bar title="Projects (3)" />
      <ProjectCard
        img="./img/edie-homepage.png"
        name="edie homepage"
        description="In this project, I work with React and Tailwind in Vitejs to create a responsive page
          . In this challenge, I worked with Edie, making a website that provides services to certain clients."
        demo="https://bagseediehomepage.netlify.app/"
        code="https://github.com/Bagse/edie-homepage"
      />
      <ProjectCard
        img="./img/checkout-page.png"
        name="checkout page"
        description="In this project, I work with React and Tailwind in Vitejs to create a responsive page
        . In this challenge, I worked with the shopping form where you can interact with the number of products with a modern design."
        demo="https://bagsecheckoutpage.netlify.app/"
        code="https://github.com/Bagse/ckeckout-page"
      />
      <ProjectCard
        img="./img/recipe-page.png"
        name="recipe page"
        description="In this project, I work with React and Tailwind in Vitejs to create a responsive page
        . In this challenge, I worked with a cheesecake recipe showing the ingredients, step-by-step instructions and time."
        demo="https://recipe-page-cheesecake.netlify.app/"
        code="https://github.com/Bagse/recipe-page"
      />
    </div>
  );
}

export default Projects;
