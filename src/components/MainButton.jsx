const MainButton = ({ isPlaying, currentSong, song, playSong }) => {

    return (

        <button className="main-button" onClick={() => playSong(song)}>
            {(currentSong?.id === song.id && isPlaying) ? "⏸" : "⏵"}
        </button>

    );

  };
  


export default MainButton;
  

  