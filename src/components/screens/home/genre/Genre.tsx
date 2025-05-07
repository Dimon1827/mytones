import React from 'react';
import TopWrapper from '../top-wrapper/TopWrapper';
import * as styles from './Genre.module.scss';
import genre from './genre-data';
import GenreItem from './GenreItem';

const TopGenre = () => {
  return (
    <section className={styles.genre}>
      <TopWrapper text={'Top Genre'} />
      <ul className={styles.genreList}>
        {genre.map((item, index) => {
          return (
            <GenreItem key={index} to={item.to}>
              {item.name}
            </GenreItem>
          );
        })}
      </ul>
    </section>
  );
};

export default TopGenre;
