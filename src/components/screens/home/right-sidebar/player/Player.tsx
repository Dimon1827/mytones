import React from 'react';
import * as styles from './Player.module.scss';
import Shuffle from '@/assets/icons/shuffle.svg';
import Previous from '@/assets/icons/previous.svg';
import Play from '@/assets/icons/pause.svg';
import Next from '@/assets/icons/next.svg';
import Repeat from '@/assets/icons/repeat.svg';

const Player = () => {
  return (
    <div className={styles.player}>
      <h2 className={styles.title}>Now playing</h2>
      <img className={styles.image} src="/images/songs/dynamiteBTS.jpg" alt="" width={200} height={120} />
      <h3 className={styles.subtitle}>Dynamite</h3>
      <h4 className={styles.artist}>BTS</h4>
      <div className={styles.sliderWrapper}>
        <div className={styles.slider}></div>
      </div>
      <div className={styles.timeWrapper}>
        <div className={styles.currentTime}>2:18</div>
        <div className={styles.allTime}>4:15</div>
      </div>
      <div className={styles.actions}>
        <button className={styles.shuffle}>
          <Shuffle className={styles.shuffleImage} alt="Перемешать" />
        </button>
        <button className={styles.previous}>
          <Previous className={styles.previousImage} alt="Назад" />
        </button>
        <button className={styles.play}>
          <Play className={styles.playImage} alt="Запуск/Пауза"/>
        </button>
        <button className={styles.next}>
          <Next className={styles.nextImage} alt="Вперед" />
        </button>
        <button className={styles.repeat}>
          <Repeat className={styles.repeatImage} alt="Повторить" />
        </button>
      </div>
      <p className={styles.text}>Lyrics</p>
    </div>
  );
};

export default Player;
