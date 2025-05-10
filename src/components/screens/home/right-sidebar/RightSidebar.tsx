import React from 'react';
import TopWrapper from '../top-wrapper/TopWrapper';
import * as styles from './Weekly.module.scss';
import WeeklySong from './WeeklySong';
import Player from './player/Player';

const RightSidebar = () => {
  return (
    <section className={styles.RightSidebar}>
      <div className={styles.WeeklyWrapper}>
        <TopWrapper text={'Top 100 Weekly'} />
        <WeeklySong />
      </div>
      <Player />
    </section>
  );
};

export default RightSidebar;
