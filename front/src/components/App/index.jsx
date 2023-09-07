import HeroesList from "../Heroes/HeroesList";
import HeroesAddForm from "../Heroes/HeroesAddForm";
import HeroesFilters from "../Heroes/HeroesFilters";

import "./app.scss";

const App = () => {
  return (
    <main className="app">
      <div className="content">
        <HeroesList />
        <div className="content__interactive">
          <HeroesAddForm />
          <HeroesFilters />
        </div>
      </div>
    </main>
  );
};

export default App;
