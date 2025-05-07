import IListItem from '@/types/listItem';
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './Collection.module.scss';

interface ICollectionItem extends IListItem {
  image: string;
}

const CollectionItem = ({ key, to, children, image }: ICollectionItem) => {
  return (
    <li key={key}>
      <NavLink className={styles.collectionLink} to={to}>
        <img
          className={styles.collectionImage}
          src={image}
          alt={children}
          width={94}
          height={94}
        />
        <button className={styles.button}></button>
      </NavLink>
    </li>
  );
};

export default CollectionItem;
