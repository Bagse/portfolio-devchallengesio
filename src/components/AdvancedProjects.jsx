import Bar from "../components/Bar";
import ProjectAdvanCard from "./ProjectAdvanCard";

function AdvancedProjects() {
  let numElements = 0;
  const cards = [];

  cards.push(
    <ProjectAdvanCard
      img="./img/soundfy.png"
      name="soundfy"
      description="In this article I tell the story about Proin eu justo sit amet lacus
          bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi. Donec
          aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat
          malesuada molestie."
      demo="https://soundfy-nine.vercel.app/"
    />
  );
  numElements++;

  cards.push(
    <ProjectAdvanCard
      img="./img/github-store.png"
      name="github merch"
      description="In this article I tell the story about Proin eu justo sit amet lacus
          bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi. Donec
          aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat
          malesuada molestie."
      demo="https://github-merch.vercel.app/"
    />
  );
  numElements++;

  return (
    <div className="flex flex-col gap-4">
      <Bar title={`advanced projects (${numElements})`} />
      {cards}
    </div>
  );
}

export default AdvancedProjects;
