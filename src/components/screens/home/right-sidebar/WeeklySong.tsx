import React from 'react';
import * as styles from './Weekly.module.scss';
import weeklySong from './weeklySongData';
import WeeklySongItem from './WeeklySongItem';

const WeeklySong = () => {
  return (
    <ul className={styles.WeeklyList}>
      {weeklySong.map((item, index) => {
        return (
          <WeeklySongItem
            key={index}
            image={item.image}
            artist={item.artist}
            time={item.time}
            index={index}
          >
            {item.name}
          </WeeklySongItem>
        );
      })}
    </ul>
  );
};

export default WeeklySong;
