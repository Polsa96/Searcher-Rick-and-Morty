import axios from 'axios';
import React, {useEffect, useState} from 'react';
import './Characters.css';
import Gallery from '../../components/Gallery/Gallery';
import Pagination from '../../components/Pagination/Pagination';


export default function Characters(){

    const baseUrl="https://rickandmortyapi.com/api";
    const itemCharacter = "/character";
    const [characters, setCharacters] = useState([]);

    //Això es per PAGINATION
    const [pages,setPages]=useState(1);

    const changePageUp = () =>{
        setPages(pages+1);
    }

    const changePageDown = () =>{
        setPages(pages-1);
    }
    //-----

    //UNA FORMA d'agafar els personatges
    const getCharacters = async (pageNew=pages)=>{
        const res = await axios(baseUrl+itemCharacter+"?page="+pageNew);
        console.log(res.data.results);
        setCharacters(res.data.results);
    }
    useEffect(getCharacters,[pages]);
   
    //UNA ALTRA FORMA
    // useEffect(()=>{
    //     axios(baseUrl+itemCharacter).then(res=>{console.log(res.data)})
    // },[])

    //-----

    return(
        <div>
            <Gallery list={characters}></Gallery>
            <Pagination changePageUp={changePageUp} changePageDown={changePageDown} pages={pages}/>

            <p className='characterP'>Page {pages}</p>
            
        </div>
        

    )
}

