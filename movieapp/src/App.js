import './App.css';
import { useState } from 'react';
import MoviebySearch from './components/moviebysearch/MoviebySearch';
import MoviebyTitle from './components/moviebytitle/MoviebyTitle';

function App() {

  const [movieTitle, setMovieTitle] = useState("");

    // Function to be shared between components
    const handleTitleSearch = async (title) => {
        console.log("Searching for title:", title);
        setMovieTitle(title);
        // You can trigger the search logic in MoviebyTitle.js here
    };
  return (
    <div className="App">
      <MoviebySearch handleTitleSearch={handleTitleSearch} />
      <MoviebyTitle movieTitle={movieTitle} />
    </div>
  );
}

export default App;
