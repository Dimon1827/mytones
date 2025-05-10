import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import * as styles from './Album.module.scss';

const Album = () => {
  const sliderOptions = {
    perPage: 3,
    gap: '30px',
    arrows: false,
    pagination: false,
  };

  return (
    <section className={styles.albumWrapper}>
      <div className={styles.topWrapperTitle}>
        <p className={styles.topWrapperText}> Featured Album</p>
        <p className={styles.topWrapperAll}>See All</p>
      </div>
      <Splide hasTrack={false} options={sliderOptions}>
        <SplideTrack>
          <SplideSlide className={styles.slider}>
            <img
              className={styles.sliderImage}
              src="/images/albums/wendy.webp"
              alt=""
              width={338}
              height={200}
            />
            <div className={styles.textWrapper}>
              <h2 className={styles.subtitle}>
                Like Water - The 1st Mini Album
              </h2>
              <p className={styles.text}>Wendy</p>
            </div>
          </SplideSlide>
          <SplideSlide className={styles.slider}>
            <img
              className={styles.sliderImage}
              src="/images/albums/l-rose.webp"
              alt=""
              width={338}
              height={200}
            />
            <div className={styles.textWrapper}>
              <h2 className={styles.subtitle}>-R-</h2>
              <p className={styles.text}>Rose</p>
            </div>
          </SplideSlide>
          <SplideSlide className={styles.slider}>
            <img
              className={styles.sliderImage}
              src="/images/albums/wendy.webp"
              alt=""
              width={338}
              height={200}
            />
            <div className={styles.textWrapper}>
              <h2 className={styles.subtitle}>
                Like Water - The 1st Mini Album
              </h2>
              <p className={styles.text}>Wendy</p>
            </div>
          </SplideSlide>
        </SplideTrack>
      </Splide>
    </section>
  );
};

export default Album;
