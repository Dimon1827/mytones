import React, { useState } from 'react';
import Shuffle from '@/assets/icons/shuffle.svg';
import Repeat from '@/assets/icons/repeat.svg';
import * as styles from './MyMusic.module.scss';
import useRepeatSong from '@/hooks/repeatSong';
import weeklySong from '../home/right-sidebar/weeklySongData';
import MyMusicItem from './MyMusicItem';

const MyMusic = () => {
  const { isMusicRepeat, handleRepeatAudio } = useRepeatSong();
  return (
    <div className={styles.myMusicContainer}>
      <div className={styles.topWrapper}>
        <h1 className={styles.mainTitle}>My Music</h1>
        <div className={styles.buttonsContainer}>
          <div className={styles.buttonWrapper}>
            <button>
              <div className={styles.playButton}></div>
            </button>
            <p className={styles.textButton}>Play</p>
          </div>
          <div className={styles.buttonWrapper}>
            <button
              onClick={handleRepeatAudio}
            >
              <Shuffle
                className={styles.shuffleImage}
                alt="Перемешать"
                width={18}
                height={18}
              />
            </button>
            <p className={styles.textButton}>Shuffle</p>
          </div>
        </div>
      </div>
      <ul className={styles.myMusicList}>
        {weeklySong.map((item, index) => {
          return <MyMusicItem key={index} {...item}></MyMusicItem>;
        })}
      </ul>
    </div>
  );
};

export default MyMusic;
