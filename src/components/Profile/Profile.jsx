import {useContext} from 'react';
import { ProfileContext } from "../../context/ProfileContext";
import "./Profile.css"



export default function Profile(){
    const {profile} = useContext(ProfileContext);

    return( 
    <div className="profile">
        <img src={profile.image} alt={profile.name}/>
        <p>{profile.name}</p>

    </div>
    )
}