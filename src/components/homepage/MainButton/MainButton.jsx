import { useContext } from "react";
import { MusicPlayerContext } from "../../../context/MusicPlayerContext.jsx";
import styles from "./MainButton.module.scss"

const { mainButton, playing } = styles;

const MainButton = ({ song }) => {

    const { currentSong, isPlaying, playSong } = useContext(MusicPlayerContext);

    return (

        <button className={`${mainButton} ${(currentSong?.id === song.id && isPlaying) ? playing : ""}`}  onClick={() => playSong(song)}>
          {(currentSong?.id === song.id && isPlaying) ? <span>❚❚</span> : "⏵"}
        </button>

    );

  };
  


export default MainButton;
  

  