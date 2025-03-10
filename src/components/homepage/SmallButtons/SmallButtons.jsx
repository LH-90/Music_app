import { useContext } from "react";
import { MusicPlayerContext } from "../../../context/MusicPlayerContext.jsx";
import styles from "./SmallButtons.module.scss"

const { wrapper, smallButton } = styles;

const SmallButtons = ({ song, index }) => {

    const { currentSong, playPrevious, playNext } = useContext(MusicPlayerContext);

    return (
        <div>
            {(currentSong?.id === song.id) ? (
                <div className={wrapper}>
                    <button className={smallButton} onClick={() => playPrevious(index)}><span>⏴⏴</span></button>
                    <button className={smallButton} onClick={() => playNext(index)}><span>⏵⏵</span></button>
                </div>
            ) : null}
        </div>
    );

  };
  


  export default SmallButtons;
  