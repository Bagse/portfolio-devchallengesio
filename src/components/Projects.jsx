import ProjectCard from "../components/ProjectCard";
import Bar from "../components/Bar";

function Projects() {
  return (
    <div className="flex flex-col gap-4">
      <Bar title="Projects (3)" />
      <ProjectCard
        img="./img/edie-homepage.png"
        name="edie homepage"
        description="In this project, I work with HTML and CSS to create a responsive page
          . The design is from devchallenge.io. Donec aliquam est dui, vel
          vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
        demo="https://bagseediehomepage.netlify.app/"
        code="https://github.com/Bagse/edie-homepage"
      />
      <ProjectCard
        img="./img/checkout-page.png"
        name="checkout page"
        description="In this project, I work with HTML and CSS to create a responsive page
          . The design is from devchallenge.io. Donec aliquam est dui, vel
          vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
        demo="https://bagsecheckoutpage.netlify.app/"
        code="https://github.com/Bagse/ckeckout-page"
      />
      <ProjectCard
        img="./img/recipe-page.png"
        name="recipe page"
        description="In this project, I work with HTML and CSS to create a responsive page
          . The design is from devchallenge.io. Donec aliquam est dui, vel
          vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie."
        demo="https://recipe-page-cheesecake.netlify.app/"
        code="https://github.com/Bagse/recipe-page"
      />
    </div>
  );
}

export default Projects;
