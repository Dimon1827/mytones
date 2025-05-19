import { useState } from 'react';

const useRepeatSong = () => {
  const [isMusicRepeat, setIsMusicRepeat] = useState(false);

  function handleRepeatAudio() {
    if (isMusicRepeat) {
      setIsMusicRepeat(false);
    } else {
      setIsMusicRepeat(true);
    }
  }

  return { isMusicRepeat, setIsMusicRepeat, handleRepeatAudio };
};

export default useRepeatSong;
