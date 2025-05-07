import React from 'react';
import * as styles from './Dots.module.scss';

const Dots = () => {
  return (
    <div className={styles.dots}>
      <button className={styles.dot} type="button" data-id="0"></button>
      <button
        className={`${styles.dot} ${styles.active}`}
        type="button"
        data-id="1"
      ></button>
      <button className={styles.dot} type="button" data-id="2"></button>
      <button className={styles.dot} type="button" data-id="3"></button>
      <button className={styles.dot} type="button" data-id="4"></button>
      <button className={styles.dot} type="button" data-id="5"></button>
    </div>
  );
};

export default Dots;
