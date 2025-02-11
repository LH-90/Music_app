import SongItem from "./SongItem";


const SongsList = ({ songs, currentSong, isPlaying, playSong, playPrevious, playNext }) => {
    
    return (

      <div className="songs-list">
        {songs.map((song, index) => (
          <SongItem 
            key={song.id}
            song={song}
            index={index}
            currentSong={currentSong}
            isPlaying={isPlaying}
            playSong={playSong}
            playPrevious={playPrevious}
            playNext={playNext}
          />
        ))}
      </div>

    );

  };
  


export default SongsList;