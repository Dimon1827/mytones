import React from 'react';
import * as styles from './Weekly.module.scss';
import weeklySong from './weeklySongData';
import WeeklySongItem from './WeeklySongItem';
import { ISong } from '@/types';

interface IWeeklySongProps {
  playlist: ISong[];
  onSongClick: (index: number) => void;
}


const WeeklySong = ({ playlist, onSongClick }: IWeeklySongProps) => {
  return (
    <ul className={styles.WeeklyList}>
      {playlist.map((item, index) => {
        return (
          <WeeklySongItem
            key={index}
            image={item.image}
            artist={item.artist}
            index={index}
            time = {item.time}
            onSongClick={onSongClick}
          >
            {item.name}
          </WeeklySongItem>
        );
      })}
    </ul>
  );
};

export default WeeklySong;
