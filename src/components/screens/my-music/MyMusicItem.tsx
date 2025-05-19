import { ISong } from '@/types';
import React from 'react';
import Favorite from '@/assets/icons/favorite.svg';
import * as styles from './MyMusic.module.scss';

const MyMusicItem = ({ name, image, artist, time, isFavorite }: ISong) => {
  return (
    <li className={styles.myMusicItem}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{name}</h2>
        <span className={styles.text}>{artist}</span>
      </div>
      <div className={styles.rightWrapper}>
        <span className={styles.time}>{time}</span>
        <button>
          <Favorite
            className={`${styles.favoriteImage} ${
              isFavorite ? styles.active : ''
            }`}
            alt="В любимые"
            width={28}
            height={24}
          />
        </button>
        <button className={styles.triplet}></button>
      </div>
    </li>
  );
};

export default MyMusicItem;
