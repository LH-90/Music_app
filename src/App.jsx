import "./App.css"
import songs from "./data/songs"
import useMusicPlayer from "./hooks/useMusicPlayer";
import SongsList from "./components/SongsList";


const App = () => {

  const { currentSong, isPlaying, playSong, playPrevious, playNext } = useMusicPlayer(songs);  
  
  return (

    <div>
        
        <h1 className="title">Léa's Playlist</h1>
     
        <div>
          <SongsList 
           songs={songs} 
           currentSong={currentSong} 
           isPlaying={isPlaying} 
           playSong={playSong} 
           playPrevious={playPrevious} 
           playNext={playNext} 
          />
        </div>

    </div>

  );

};



export default App;