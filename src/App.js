import logo from './logo.svg';
import './App.css';
import Liste_de_films from './Liste_de_films';
import MovieCard from './MovieCard';

function App() {
  return (
    <div className="App">
      <MovieCard/>
     <Liste_de_films/>
    </div>
  );
}

export default App;
