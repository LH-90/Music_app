import { useState, useRef, createContext } from "react";


const MusicPlayerContext = createContext(null);


const MusicPlayerProvider = ({children, songs}) => {

  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio()); // Reference for the audio element

  const playSong = (song) => {

    if (currentSong?.id === song.id) {

      if (isPlaying) {
        audioRef.current.pause(); // Pause the song
      } else {
        audioRef.current.play(); // Play again without restarting the song
      }
      setIsPlaying(!isPlaying);

    } else {
      
      setCurrentSong(song); 
      setIsPlaying(true);
      audioRef.current.src = song.previewURL; // Set the new song source
      audioRef.current.crossOrigin = "anonymous";
      audioRef.current.play(); // Play the new song
      audioRef.current.onended = () => { setIsPlaying(false) }; // When song is finished, update to false
    }
  };

  const playPrevious = (index) => {

    if (index===0) {
      playSong(songs[songs.length - 1]);
    }
    if (index > 0) {
      playSong(songs[index - 1]); 
    }

  };
  
  const playNext = (index) => {

    if (index < songs.length - 1) {
      playSong(songs[index + 1]); 
    }
    if (index === songs.length - 1) {
      playSong(songs[0]); 
    }

  };


  return (
    <MusicPlayerContext.Provider value={{ currentSong, isPlaying, playSong, playPrevious, playNext }}>
      {children}
    </MusicPlayerContext.Provider>
  )
};

export { MusicPlayerProvider, MusicPlayerContext };
