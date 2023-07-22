import { Facts } from "./components/Facts/FactsComponent";
import Header from "./components/Header/HeaderComponent";

function Home() {
  return (
    <>
      <Header></Header>
      <hr
        className="w-48 h-1 mx-auto my-8 bg-blue-600 dark:bg-blue-400 border-0 rounded md:my-10"
      />
      <Facts></Facts>
    </>
  );
}
export default Home;