import { useState } from "react";
import axios from "axios";

const FilmRequest = () => {
    const [filmName, setFilmName] = useState("");
    const [movies, setMovies] = useState("");


    const updateFilmName = (e) => {
        setFilmName(e.target.value);
    }

    const makeRequest = (e) => {
        axios.get("http://www.omdbapi.com/?apikey=d7d56e0e&s=" + filmName)
            .then(response => {
                console.log(response.data);
                setMovies(response.data);
            });
        }
            
    return (
        <>
            <div>

                <p>Enter the name of the film you are searching for here</p>
                <input type="text" onChange={updateFilmName} />

                <button onClick={(e) => makeRequest(e)}>Find Movie</button>

                
            </div>

        </>

    );
}

export default FilmRequest;