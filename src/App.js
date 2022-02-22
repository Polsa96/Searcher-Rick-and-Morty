import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import "./App.css";
import Characters from "./pages/Characters/Characters";
import Searcher from "./pages/Searcher/Searcher";
import HomePage from "./pages/HomePage/HomePage";
import Header from "./components/Header/Header";
import { ProfileContext } from "./context/ProfileContext";
import {useState} from 'react'

function App() {


  const profileDefault = {
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  }

  const [profile, setProfile]=useState(profileDefault)


  return (
    <ProfileContext.Provider value={{profile, setProfile}}>
      <BrowserRouter>
        <header className="headerApp">
          <Header></Header>
        </header>

        <main>
          <Routes>
            <Route path="/">
              <Route index element={<HomePage />} />
              <Route path="characters" element={<Characters />} />
              <Route path="searcher" element={<Searcher />} />
            </Route>
          </Routes>
        </main>
      </BrowserRouter>
    </ProfileContext.Provider>
  );
}

export default App;
