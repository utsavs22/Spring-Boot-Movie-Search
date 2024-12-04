import React, { useState } from 'react'
import { searchMoviesbyName } from "../../api";
import { handleTitleSearch } from "../moviebytitle/MoviebyTitle";
import './moviebysearch.css';

function MoviebySearch({handleTitleSearch}) {

    const [name, setName] = useState("");
    const [movies, setMovies] = useState([]);

    const handleSearch = async () => {
        try {
            const result = await searchMoviesbyName(name);
            console.log("line 13 of MoviebySearch.js" + result);
            setMovies(result);

        } catch (error) {
            console.error("Error during search", error);
            setMovies([]);
        }
    }
    const handleMovieClick = (title) => {
        console.log(title);
        handleTitleSearch(title); // in MoviebyTitle.js
    }

    return (
        <div>
            <h2>Search Movies by Name</h2>
            <input
                type="text"
                placeholder="Enter movie name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <div className="movie-list">
                {movies.length > 0 ? (
                    movies.map((movie) => (
                        <div key={movie.imdbID} className="movie-card" onClick={() => {
                            console.log("Image clicked");
                            handleMovieClick(movie.Title)
                        }} >
                            <img src={movie.Poster || "https://via.placeholder.com/150"} alt={movie.Title} />
                            <div className="movie-card-details">
                                <h3>{movie.Title}</h3>
                                <p>Type: {movie.Type.toUpperCase()}</p>
                                <p>Year: {movie.Year}</p>
                                <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="_blank" rel="noopener noreferrer">
                                    View on IMDb
                                </a>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No movies found. Try another search.</p>
                )}
            </div>
        </div>
    )
}

export default MoviebySearch