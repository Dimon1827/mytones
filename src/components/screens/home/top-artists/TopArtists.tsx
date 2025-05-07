import React from 'react';
import artists from './artists';
import ArtistsItem from './artists-item/ArtistsItem';
import * as styles from './artists-item/Artists.module.scss';
import TopWrapper from '../top-wrapper/TopWrapper';

const TopArtists = () => {
  return (
    <section className={styles.artists}>
      <TopWrapper text={'Top Artists'} />
      <ul className={styles.artistsList}>
        {artists.map((item, index) => {
          return (
            <ArtistsItem
              key={index}
              to={item.to}
              image={item.image}
              plays={item.plays}
            >
              {item.name}
            </ArtistsItem>
          );
        })}
      </ul>
    </section>
  );
};

export default TopArtists;
