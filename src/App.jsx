import "./App.css"
import songs from "./data/songs"
import { MusicPlayerProvider } from "./context/MusicPlayerContext.jsx";
import SongsList from "./components/SongsList/SongsList.jsx";


const App = () => {
  
  return (

    <MusicPlayerProvider songs={songs}>

        <h1>Léa's Playlist</h1>
        <SongsList songs={songs} />

    </MusicPlayerProvider>

  );

};



export default App;