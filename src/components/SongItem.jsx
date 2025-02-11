import MainButton from "./MainButton";
import SmallButtons from "./SmallButtons";


const SongItem = ({ song, index, currentSong, isPlaying, playSong, playPrevious, playNext }) => {

  return (

    <div className="song-item">

      <MainButton 
        isPlaying={isPlaying}
        currentSong={currentSong}
        song={song}
        playSong={playSong}
      />
      <img className="album-cover" src={song.albumCover} alt={`${song.album} Cover`} />
      <p><strong>{song.title}</strong> - {song.artist}</p>

      <SmallButtons 
        currentSong={currentSong}
        song={song}
        playPrevious={playPrevious}
        playNext={playNext}
        index={index}/>

    </div>

  );

};



export default SongItem;
