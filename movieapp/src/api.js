import axios from "axios";

const apiUrl = "http://localhost:8081"; //will be changed later(it's maybe 8081)

export async function searchMoviesbyName(name) {
    try {
        const response = await axios.post(
            `${apiUrl}/search-movies`,
            new URLSearchParams({name}).toString(),
            {
                headers: {
                    "Content-Type" : "application/x-www-form-urlencoded",
                },
            }
        );
        // return (response.data || "hellu");
        const temp = response.data.Search;
        console.log(temp);
        
        return response.data.Search || [];
        // return "tinku";
    } catch (error) {
        console.log("Error in fetching the movies",error);
        throw error;
    }
}

export async function getMoviebyTitle(title) {
    try {
        const response = await axios.post(
            `${apiUrl}/movie-details`,
            new URLSearchParams({title}).toString(),
            {
                headers: {
                    "Content-Type" : "application/x-www-form-urlencoded"
                },
            }
        );
        console.log(response.data);
        return response.data || null;

    } catch (error) {
        console.log("Error in fething the movie",error);
        throw error;        
    }
}