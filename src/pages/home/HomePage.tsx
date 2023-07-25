import { CvButton } from "../../components/cvButton/CvButtonComponent";
import { Facts } from "./components/Facts/FactsComponent";
import Header from "./components/Header/HeaderComponent";
import { Projects } from "./components/Projects/ProjectComponent";
import { Works } from "./components/WorkExperiences/WorkExperienceComponent";
import { Skills } from "./components/skills/SkillsComponent";

function Home() {
  return (
    <div className="dark:text-white text-gray-800">
      <Header></Header>
      <hr
        className="w-48 h-1 mx-auto my-8 bg-blue-600 dark:bg-blue-400 border-0 rounded md:my-10"
      />
      <Facts></Facts>
      <h2 className="text-center font-bold text-4xl">Proyectos</h2>
    <hr
      className="w-48 h-1 mx-auto my-8 bg-blue-600 dark:bg-blue-400 border-0 rounded md:my-10"
    />
    <Projects></Projects>
    <h2 className="text-center font-bold text-4xl">Habilidades</h2>
    <hr
      className="w-48 h-1 mx-auto my-8 bg-blue-600 dark:bg-blue-400 border-0 rounded md:my-10"
    />
    <Skills></Skills>
    <h2 className="text-center font-bold text-4xl">Experience Laboral</h2>
    <hr
      className="w-48 h-1 mx-auto my-8 bg-blue-600 dark:bg-blue-400 border-0 rounded md:my-10"
    />
    <Works></Works>
    <CvButton></CvButton>
    </div >
  );
}
export default Home;