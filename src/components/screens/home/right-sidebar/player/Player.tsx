import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import * as styles from './Player.module.scss';
import Shuffle from '@/assets/icons/shuffle.svg';
import Previous from '@/assets/icons/previous.svg';
import Play from '@/assets/icons/pause.svg';
import Next from '@/assets/icons/next.svg';
import Repeat from '@/assets/icons/repeat.svg';
import weeklySong from '../weeklySongData';
import usePlaySong from '@/hooks/playSong';
import { ISong } from '@/types';
import useRepeatSong from '@/hooks/repeatSong';

interface IPlayerProps {
  playlist: ISong[];
  currentTrackIndex: number;
}

const Player = ({ playlist, currentTrackIndex }: IPlayerProps) => {
  const [audioProgress, setAudioProgress] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('3:10');
  const [musicCurrentTime, setMusicCurrentTime] = useState('0:00');
  const { isMusicRepeat, handleRepeatAudio } = useRepeatSong();
  const {
    currentMusicDetails,
    isAudioPlaying,
    currentAudio,
    handleAudioPlay,
    handlePreviousSong,
    handleNextSong,
  } = usePlaySong(playlist, currentTrackIndex);

  function handleMusicProgressBar(e: ChangeEvent<HTMLInputElement>) {
    setAudioProgress(Number(e.target.value));
    currentAudio.current.currentTime =
      (Number(e.target.value) * currentAudio.current.duration) / 100;
  }

  function handleAudioUpdate() {
    if (!isNaN(currentAudio.current.duration)) {
      let minutes = Math.floor(currentAudio.current.duration / 60);
      let seconds = Math.floor(currentAudio.current.duration % 60);
      let musicTotalLength = `${minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`;
      setMusicTotalLength(musicTotalLength);
    } else {
      setMusicTotalLength('0:00');
    }

    let min = Math.floor(currentAudio.current.currentTime / 60);
    let sec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${min}:${sec < 10 ? `0${sec}` : sec}`;
    setMusicCurrentTime(musicCurrentT);
    const progress =
      (currentAudio.current.currentTime / currentAudio.current.duration) * 100;
    setAudioProgress(isNaN(progress) ? 0 : progress);
  }

  return (
    <div className={styles.player}>
      <h2 className={styles.title}>Now playing</h2>
      <audio
        loop={isMusicRepeat}
        src="/songs/Justin_Bieber-Anyone.mp3"
        ref={currentAudio}
        onEnded={handleNextSong}
        onTimeUpdate={handleAudioUpdate}
      ></audio>
      <img
        className={styles.image}
        src={currentMusicDetails.image}
        alt=""
        width={200}
        height={120}
      />
      <h3 className={styles.subtitle}>{currentMusicDetails.name}</h3>
      <h4 className={styles.artist}>{currentMusicDetails.artist}</h4>
      <input
        type="range"
        className={styles.slider}
        value={audioProgress}
        onChange={handleMusicProgressBar}
      />
      <div className={styles.timeWrapper}>
        <div className={styles.currentTime}>{musicCurrentTime}</div>
        <div className={styles.allTime}>{musicTotalLength}</div>
      </div>
      <div className={styles.actions}>
        <button className={styles.shuffle}>
          <Shuffle className={styles.shuffleImage} alt="Перемешать" />
        </button>
        <button className={styles.previous} onClick={handlePreviousSong}>
          <Previous className={styles.previousImage} alt="Назад" />
        </button>
        <button className={styles.play} onClick={handleAudioPlay}>
          <div
            className={isAudioPlaying ? styles.stopButton : styles.playButton}
          ></div>
        </button>
        <button className={styles.next} onClick={handleNextSong}>
          <Next className={styles.nextImage} alt="Вперед" />
        </button>
        <button
          className={`${styles.repeat} ${isMusicRepeat ? styles.active : ''}`}
          onClick={handleRepeatAudio}
        >
          <Repeat className={styles.repeatImage} alt="Повторить" />
        </button>
      </div>
      <p className={styles.text}>Lyrics</p>
    </div>
  );
};

export default Player;
