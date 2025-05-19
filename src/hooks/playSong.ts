import { ISong } from '@/types';
import { useEffect, useRef, useState } from 'react';

const usePlaySong = (playlist: ISong[], initialIndex: number) => {
  const [currentMusicDetails, setCurrentMusicDetails] = useState(
    playlist[initialIndex]
  );
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(initialIndex);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const currentAudio = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isFirstRender) {
      setIsFirstRender(false);
      return;
    }
    updateCurrentMusicDetails(initialIndex);
  }, [playlist, initialIndex]);


  function handleAudioPlay() {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  }

  function handlePreviousSong() {
    if (musicIndex === 0) {
      let setNumber = playlist.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  }

  function handleNextSong() {
    if (musicIndex >= playlist.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    } else {
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
  }

  function updateCurrentMusicDetails(number: number) {
    let musicObject = playlist[number];
    const newMusic = {
      name: musicObject.name,
      artist: musicObject.artist,
      songSrc: musicObject.songSrc,
      image: musicObject.image,
      isFavorite: false,
    };

    setCurrentMusicDetails(newMusic);
    currentAudio.current.src = musicObject.songSrc;
    currentAudio.current.play();
    setIsAudioPlaying(true);
  }

  return {
    currentMusicDetails,
    isAudioPlaying,
    currentAudio,
    handleAudioPlay,
    handlePreviousSong,
    handleNextSong,
  };
};

export default usePlaySong;



