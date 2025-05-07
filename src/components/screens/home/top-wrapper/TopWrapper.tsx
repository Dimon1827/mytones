import React from 'react';
import * as styles from './TopWrapper.module.scss';

const TopWrapper = ({ text }: { text: string }) => {
  return (
    <div className={styles.topWrapper}>
      <h2 className={styles.title}>{text}</h2>
      <p className={styles.moreText}>More list</p>
    </div>
  );
};

export default TopWrapper;
