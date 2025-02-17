import MainButton from "../MainButton/MainButton";
import SmallButtons from "../SmallButtons/SmallButtons";
import styles from "./SongItem.module.scss"


const SongItem = ({ song, index }) => {

  return (

    <div className={styles.wrapper}>

      <MainButton 
        song={song}
      />
      <img className={styles.img} src={song.albumCover} alt={`${song.album} Cover`} />
      <p><strong>{song.title}</strong> - {song.artist}</p>

      <SmallButtons 
        song={song}
        index={index}/>

    </div>

  );

};



export default SongItem;
