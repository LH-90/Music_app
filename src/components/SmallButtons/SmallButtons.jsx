import { useContext } from "react";
import { MusicPlayerContext } from "../../context/MusicPlayerContext.jsx";
import styles from "./SmallButtons.module.scss"


const SmallButtons = ({ song, index }) => {

    const { currentSong, playPrevious, playNext } = useContext(MusicPlayerContext);

    return (
        <div>
            {(currentSong?.id === song.id) ? (
                <div className={styles.wrapper}>
                    <button className={styles.button} onClick={() => playPrevious(index)}>⏮</button>
                    <button className={styles.button} onClick={() => playNext(index)}>⏭</button>
                </div>
            ) : null}
        </div>
    );

  };
  


  export default SmallButtons;
  