import './Gallery.css';
import React, {useContext} from 'react';
import {ProfileContext} from "../../context/ProfileContext";


function Gallery({list}) {
    const{setProfile}=useContext(ProfileContext);
    return (

    <div className="galleryDiv">
        {list.map(item=>
            <figure className="galleryFigure" key={item.id}>
                <figcaption>{item.id}. {item.name}</figcaption>
                <img className="galleryImg" src={item.image} alt={item.name}/>
                <button onClick={()=>setProfile(item)}>Mutar</button>
                
            </figure>
        )}
        
    </div>
    )
  }
  

  export default React.memo(Gallery)