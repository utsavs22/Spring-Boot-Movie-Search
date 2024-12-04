import React, { useState, useEffect } from 'react'
import { getMoviebyTitle } from '../../api'
import './moviebytitle.css'

function MoviebyTitle({movieTitle}) {

    const [movie, setMovie] = useState(null)

    useEffect(() => {
        if (movieTitle) {
            handleTitleSearch(movieTitle);
            console.log(movieTitle);
            
        }
    }, [movieTitle]);

    const handleTitleSearch = async (movieTitle) => {
        try {
            const result = await getMoviebyTitle(movieTitle);
            console.log("line 12 of MovieBytitle.js" + result);
            setMovie(result);
        } catch (error) {
            console.error("Error during search", error);
            setMovie(null);
        }
    }

    return (
        <div>
            {/* <h2>Find Exact Movie Details</h2>
            <button onClick={handleTitleSearch}>Show More Details</button> */}
            {movie && (
                <div className="movie-details">
                    <img src={movie.Poster || "https://via.placeholder.com/150"} alt={movie.Title} />
                    <div className="details-section">
                        <h3>{movie.Title}</h3>
                        <p>
                            <span className="highlight">Year:</span> {movie.Year}
                        </p>
                        <p>
                            <span className="highlight">Genre:</span> {movie.Genre}
                        </p>
                        <p>
                            <span className="highlight">Director:</span> {movie.Director}
                        </p>
                        <p>
                            <span className="highlight">Actors:</span> {movie.Actors}
                        </p>
                        <p>
                            <span className="highlight">Plot:</span> {movie.Plot}
                        </p>
                        <p>
                            <span className="highlight">Awards:</span> {movie.Awards}
                        </p>
                        <p>
                            <span className="highlight">Box Office:</span> {movie.BoxOffice || "N/A"}
                        </p>
                        <div className="ratings-container">
                            <span className="highlight">Ratings:</span>
                            {movie.Ratings.map((rating, index) => (
                                <div className="rating" key={index}>
                                    {rating.Source}: {rating.Value}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default MoviebyTitle