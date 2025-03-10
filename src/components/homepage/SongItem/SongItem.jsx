import MainButton from "../MainButton/MainButton";
import SmallButtons from "../SmallButtons/SmallButtons";
import styles from "./SongItem.module.scss";
import React from "react";
import { Link } from "react-router-dom";

const { songItem, img } = styles;

const SongItem = ({ song, index }) => {

  return (

    <div className={songItem}>

      <MainButton 
        song={song}
      />
      <img className={img} src={song.albumCover} alt={`${song.album} Cover`} />
      <p><strong>{song.title}</strong> - {""}
          <Link to={`/artist/${song.artist.toLowerCase().replace(/\s+/g, "")}`}> {/*Convert to lower case and remove space*/}
            {song.artist}
          </Link>  {/*Prevent full-page reload compared to <a>*/}
      </p>
      

      <SmallButtons 
        song={song}
        index={index}/>

    </div>

  );

};



export default SongItem;