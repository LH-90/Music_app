import SongItem from "../SongItem/SongItem";


const SongsList = ({ songs }) => {
    
    return (

      <div className={styles.wrapper}>
        {songs.map((song, index) => (
          <SongItem 
            key={song.id}
            song={song}
            index={index}
          />
        ))}
      </div>

    );

  };
  


export default SongsList;