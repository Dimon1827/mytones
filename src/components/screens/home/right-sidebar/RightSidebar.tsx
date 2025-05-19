import React, { useState } from 'react';
import TopWrapper from '../top-wrapper/TopWrapper';
import * as styles from './Weekly.module.scss';
import WeeklySong from './WeeklySong';
import Player from './player/Player';
import weeklySongData from './weeklySongData';
const RightSidebar = () => {
  const [currentPlaylist, setCurrentPlaylist] = useState(weeklySongData);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const handleSongClick = (index: number) => {
    setCurrentTrackIndex(index); 
  };


  return (
    <section className={styles.RightSidebar}>
      <div className={styles.WeeklyWrapper}>
        <TopWrapper text={'Top 100 Weekly'} />
        <WeeklySong playlist={currentPlaylist} onSongClick={handleSongClick} />
      </div>
      <Player
        playlist={currentPlaylist}
        currentTrackIndex={currentTrackIndex}
      />
    </section>
  );
};

export default RightSidebar;
