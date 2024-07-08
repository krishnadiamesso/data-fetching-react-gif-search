import React, {useEffect, useState} from "react";
import SearchForm from './Components/SearchForm';
import GifList from "./Components/GifList";
import axios from "axios";


function App() {
    const [gifs, setGifs] = useState([]);
    const [query, setQuery] = useState('minions');
    const apiKey = '0d8c11EoWsgbC6nlsdGVO6ze01xKivYP'
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true)
        let activeFetch = true;

        axios.get(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&rating=g`)
            .then(response => {
                if (activeFetch) {
                    setGifs(response.data.data)
                    setLoading(false)
                }
            })
            .catch(error => console.error(`Error fetching and parsing data. An error occurred: ${error}`))

        // fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`)
        //     .then(r => r.json())
        //     .then(json => setGifs(json.data))
        //     .catch(error => console.error(`Error fetching and parsing data. An error occurred: ${error}`))

        return () => {
            activeFetch = false;
        }
    }, [query]);

    const handleQueryChange = searchText => setQuery(searchText);


    return (
        <div>
            <div className="main-header">
                <div className="inner">
                    <h1 className="main-title">GifSearch</h1>
                    <SearchForm changeQuery={handleQueryChange}/>
                </div>
            </div>
            <div className="main-content">
                {loading ? <p>Loading...</p> : <GifList gifs={gifs}/>}
            </div>
        </div>
    );
}

export default App;
