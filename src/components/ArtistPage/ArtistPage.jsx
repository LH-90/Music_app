import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ArtistPage.module.scss"

const { artistPage, artistTitle, artistText } = styles;

const ArtistPage = ({ artists }) => {
  
  const { artist } = useParams();

  const artistMatch = artists.find((art) => art.name.toLowerCase().replace(/\s+/g, "") === artist);

  return (
    <div className={artistPage}key={artistMatch.id}>
      <h1 className={artistTitle}>{artistMatch.name}</h1>
      <p className={artistText}>{artistMatch.biography}</p>
    </div>
  );
};

export default ArtistPage;
