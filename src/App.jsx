import styles from "./App.module.scss"
import songs from "./data/songs"
import { MusicPlayerProvider } from "./context/MusicPlayerContext.jsx";
import SongsList from "./components/SongsList/SongsList.jsx";


const App = () => {
  
  return (

    <MusicPlayerProvider songs={songs}>

      <div className={styles.root}>

        <h1>Léa's Playlist</h1>
        <SongsList songs={songs} />
        
      </div>

    </MusicPlayerProvider>

  );

};



export default App;