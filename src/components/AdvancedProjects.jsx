import Bar from "../components/Bar";
import ProjectAdvanCard from "./ProjectAdvanCard";

function AdvancedProjects() {
  let numElements = 0;
  const cards = [];

  cards.push(
    <ProjectAdvanCard
      img="./img/soundfy.png"
      name="soundfy"
      description="This project uses Next.js with React as a base to develop a Spotify-style web application, where users can upload songs, create playlists and bookmark their favorites. Supabase for database management and authentication."
      demo="https://soundfy-nine.vercel.app/"
    />
  );
  numElements++;

  cards.push(
    <ProjectAdvanCard
      img="./img/github-store.png"
      name="github merch"
      description="This project uses Next.js with React as a base to develop an ecommerse web application, where users can add products to a shopping cart and be able to change quantities. Each product has its own information."
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
