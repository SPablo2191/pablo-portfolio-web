import { Facts } from "./components/Facts/FactsComponent";
import Header from "./components/Header/HeaderComponent";

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
    </div >
  );
}
export default Home;