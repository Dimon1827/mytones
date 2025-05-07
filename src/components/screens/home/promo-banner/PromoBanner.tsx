import React from 'react';
import Dots from '../dots/Dots';
import * as styles from './PromoBanner.module.scss';

const PromoBanner = () => {
  return (
    <section className={styles.promoBanner}>
      <div className={styles.promoBannerContainer}>
        <div className={styles.promoBannerWrapper}>
          <h1 className={styles.title}>our features</h1>
          <p className={styles.mainText}>
            get premium access & Unlock All Popular Songs
          </p>
          <div className={styles.buttonWrapper}>
            <button className={styles.button}>Getting Now</button>
            <a className={styles.promoBannerLink} href="#">
              1 Month Free Trial
            </a>
          </div>
        </div>
        <Dots />
      </div>
    </section>
  );
};

export default PromoBanner;
