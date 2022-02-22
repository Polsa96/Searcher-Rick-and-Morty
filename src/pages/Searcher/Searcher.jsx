import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Gallery from '../../components/Gallery/Gallery';
import "./Searcher.css"

function Searcher() {

    const baseUrl="https://rickandmortyapi.com/api";
    const itemCharacter = "/character";
    const [characters, setCharacters] = useState([]);
    const [search, setSearch] = useState([]);

    const handleCharacter = (e) => {
        setSearch(e.target.value.toLowerCase());
        console.log(search);
    };

    useEffect(()=>{
        axios(baseUrl+itemCharacter).then(
            res=>{console.log(res.data);
            const filteredCharacters = res.data.results.filter((item)=>{
                return item.name.toLowerCase().includes(search);
            });
            setCharacters(filteredCharacters);
            console.log(characters);
        
        })
        
    },[search]);

    



  return (
    <div className="searcher">
    <input className="searcher-input" type="text" placeholder="Buscar..." onChange={handleCharacter}></input>
    <Gallery list={characters}></Gallery>
    </div>
  )
}

export default Searcher