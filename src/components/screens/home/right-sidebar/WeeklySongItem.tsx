import IListItem from '@/types/listItem';
import React from 'react';
import * as styles from './Weekly.module.scss';

type IWeeklySongItem = Omit<IListItem, 'to'> & {
  artist: string;
  time: string;
  image: string;
};

const WeeklySongItem = ({ children, image, artist, time, index }: IWeeklySongItem) => {
  return (
    <li className={styles.weeklyItem}>
      <span className={styles.number}>0{index+1}</span>
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
