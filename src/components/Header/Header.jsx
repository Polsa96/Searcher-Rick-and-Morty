import { NavLink } from "react-router-dom";
import Profile from '../Profile/Profile'
import './Header.css'

export default function Header() {
  return (
    <div className='headerDiv'>
    <nav>
      <NavLink to="" className={({ isActive }) => (isActive ? "active" : "inactive")}>
        Home
      </NavLink>
      <NavLink to="characters" className={({ isActive }) => (isActive ? "active" : "inactive")}>
        Characters
      </NavLink>
      <NavLink to="searcher" className={({ isActive }) => (isActive ? "active" : "inactive")}>
        Searcher
      </NavLink>
    </nav>
    <Profile></Profile>
    </div>
  );
}
