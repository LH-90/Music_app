import SongItem from "../SongItem/SongItem";


const SongsList = ({ songs }) => {
    
    return (

      <div>
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