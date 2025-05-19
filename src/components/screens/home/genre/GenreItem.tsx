import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './Genre.module.scss';
import { IListItem } from '@/types';
const GenreItem = ({ to, children }: IListItem) => {
  return (
    <li className={styles.genreItem}>
      <NavLink className={styles.genreLink} to={to}>
        {children}
      </NavLink>
    </li>
  );
};

export default GenreItem;
