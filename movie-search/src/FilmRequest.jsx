import {useState} from "react";
import axios from "axios";

const FilmRequest = () => {
    const [filmName, setFilmName] = useState("");
    const [data,setData]= useState("");
    const [apiKey, setApiKey] = useState("");

    const updateFilmName = (e) => {
        setFilmName(e.target.value);
    }

    const updateApiKey = (e) => {
        setApiKey(e.target.value);
    }

    const makeRequest = (e) => {
        axios.get("http://www.omdbapi.com/?apikey=d7d56e0e" + "&t=" + filmName)
        .then(response => {
            console.log(response.data);
            setData(response.data);
        });
    };

    return (
        <>
        <div>
            <h2>FilmRequest.js</h2>
            <p>Enter your API Key for OMDB Here (d7d56e0e)</p>
            <input type="text" onChange={(e) =>updateApiKey} />
            <p>Enter the name of the film you are searching for here</p>
            <input type="text" onChange={(e) =>updateFilmName} />
            <p>Do not click this until fields above are correctly filled</p>
            <button onClick={(e) => makeRequest(e)}>Find Movie</button>

            <h4>{data.Title}</h4>
            <h4>{data.Year}</h4>
            <h4>{data.Rated}</h4>
            <h4>{data.Genre}</h4>
            <h4>{data.Plot}</h4>
        </div>

        </> 
 
    );
}

export default FilmRequest;