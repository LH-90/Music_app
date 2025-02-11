const SmallButtons = ({ currentSong, song, playPrevious, playNext, index }) => {

    return (
        <div>
            {(currentSong?.id === song.id) ? (
                <div className="previous-next">
                    <button className="small-button" onClick={() => playPrevious(index)}>⏮</button>
                    <button className="small-button" onClick={() => playNext(index)}>⏭</button>
                </div>
            ) : null}
        </div>
    );

  };
  


  export default SmallButtons;
  