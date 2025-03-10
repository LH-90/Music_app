import styles from "./App.module.scss"
import songs from "./data/songs"
import { MusicPlayerProvider } from "./context/MusicPlayerContext.jsx";
import SongsList from "./components/homepage/SongsList/SongsList.jsx";
import { Route, Routes } from "react-router-dom";
import ArtistPage from "./components/ArtistPage/ArtistPage.jsx";
import artists from "./data/artists.js";
import Title from "./components/homepage/Title/Title.jsx";

const { container } = styles;

const App = () => {
  
  return (

    <MusicPlayerProvider songs={songs}>

      <div className={container}>

        <Routes>
          <Route path="/" element={<><Title /><SongsList songs={songs} /></>} />
          <Route path="/artist/:artist" element={<ArtistPage artists={artists}/>} />
        </Routes>
        
      </div>

    </MusicPlayerProvider>

  );

};



export default App;