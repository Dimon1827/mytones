import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './Artists.module.scss';
import { IListItem } from '@/types';
interface IArtistItem extends IListItem {
  image: string;
  plays: string;
}

const ArtistsItem = ({  to, children, image, plays }: IArtistItem) => {
  return (
    <li className={styles.artistItem}>
      <img
        className={styles.artistImage}
        src={image}
        alt={children}
        width={90}
        height={90}
      />
      <NavLink className={styles.artistLink} to={to}>
        {children}
      </NavLink>
      <p className={styles.text}>{plays} Plays</p>
    </li>
  );
};

export default ArtistsItem;
