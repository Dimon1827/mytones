import IListItem from '@/types/listItem';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './Artists.module.scss';

interface IArtistItem extends IListItem {
  image: string;
  plays: string;
}

const ArtistsItem = ({ key, to, children, image, plays }: IArtistItem) => {
  return (
    <li className={styles.artistItem} key={key}>
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
