import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import * as styles from './Musics.module.scss';

interface IMusicData {
  image: string;
  name: string;
  text: string;
}

interface IMusics {
  text: string;
  data: IMusicData[];
}
const Musics = ({ text, data }: IMusics) => {
  const sliderOptions = {
    perPage: 4,
    gap: '24px',
    arrows: false,
    pagination: false,
  };

  return (
    <section className={styles.newMusic}>
      <div className={styles.topWrapperTitle}>
        <p className={styles.topWrapperText}>{text}</p>
        <p className={styles.topWrapperAll}>See All</p>
      </div>
      <Splide hasTrack={false} options={sliderOptions}>
        <SplideTrack>
          {data.map(({ image, name, text }) => {
            return (
              <SplideSlide className = {styles.sliderElement}>
                <img
                  className={styles.sliderImage}
                  src={image}
                  alt={name}
                  width={145}
                  height={198}
                />
                <h2 className={styles.subtitle}>{name}</h2>
                <p className={styles.text}>{text}</p>
              </SplideSlide>
            );
          })}
        </SplideTrack>
      </Splide>
    </section>
  );
};

export default Musics;
