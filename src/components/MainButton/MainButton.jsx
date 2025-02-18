import { useContext } from "react";
import { MusicPlayerContext } from "../../context/MusicPlayerContext.jsx";
import styles from "./MainButton.module.scss"


const MainButton = ({ song }) => {

    const { currentSong, isPlaying, playSong } = useContext(MusicPlayerContext);

    return (

        <button className={`${styles.button} ${(currentSong?.id === song.id && isPlaying) ? styles.active : ""}`}  onClick={() => playSong(song)}>
          {(currentSong?.id === song.id && isPlaying) ? <span>❚❚</span> : "⏵"}
        </button>

    );

  };
  


export default MainButton;
  

  