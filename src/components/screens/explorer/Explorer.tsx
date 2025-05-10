import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css/skyblue';
import * as styles from './Explorer.module.scss';
import Album from './album/Album';
import Musics from './musics/Musics';
import newMusicData from './data/newMusicData';
import playlistData from './data/playlistData';


const Explorer = () => {
  return (
    <section className={styles.explorer}>
      <h1 className={styles.mainTitle}>Explore</h1>
      <div className={styles.sliderWrapper}>
        <Album />
        <Musics text={'New Music'} data={newMusicData} />
        <Musics text={'Playlist You Need'} data={playlistData} />
      </div>
    </section>
  );
};

export default Explorer;
