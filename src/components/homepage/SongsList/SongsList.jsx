import SongItem from "../SongItem/SongItem";
import styles from "./SongsList.module.scss";

const { songsList } = styles;

const SongsList = ({ songs }) => {
    
    return (
      
      <div className={songsList}>
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