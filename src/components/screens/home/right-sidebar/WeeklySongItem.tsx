import { IListItem, ISong } from '@/types';
import React from 'react';
import * as styles from './Weekly.module.scss';
import usePlaySong from '@/hooks/playSong';

type IWeeklySongItem = Omit<IListItem, 'to'> & {
  artist: string;
  image: string;
  time: string
  onSongClick: (index: number) => void;
};

const WeeklySongItem = ({
  children,
  image,
  artist,
  index,
  time,
  onSongClick,
}: IWeeklySongItem) => {
  

  return (
    <li className={styles.weeklyItem} onClick={() => onSongClick(index)}>
      <span className={styles.number}>0{index + 1}</span>
      <img
        className={styles.image}
        src={image}
        alt={children}
        width={50}
        height={50}
      />
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>{children}</h2>
        <p className={styles.text}>{artist}</p>
      </div>
      <p className={styles.time}>{time}</p>
      <img
        className={styles.settings}
        src="/icons/ic-list.svg"
        alt="Больше настройков"
        width={18}
        height={6}
      />
    </li>
  );
};

export default WeeklySongItem;
