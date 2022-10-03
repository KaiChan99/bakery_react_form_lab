import NavBar from "./NavBar";
import Title from "./Title";
import RecipeList from "./RecipeList";
import Search from "./Search";
import CakeForm from "./CakeForm";
import BakeryContainer from "./BakeryContainer";

function App() {
  return (
    <>
      <header>
        <NavBar />
        <Title />
      </header>
      <main>
        <RecipeList />
        <Search />
        {/* <CakeForm /> */}
        <BakeryContainer/>
      </main>
    </>
  );
}

export default App;
