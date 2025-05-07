import IListItem from '@/types/listItem';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './Genre.module.scss';

const GenreItem = ({ key, to, children }: IListItem) => {
  return (
    <li className={styles.genreItem} key={key}>
      <NavLink className={styles.genreLink} to={to}>
        {children}
      </NavLink>
    </li>
  );
};

export default GenreItem;
