import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from '../Menu.module.scss';
import IListItem from '@/types/listItem';


const MenuItem = ({ children, to, key }: IListItem) => {
  return (
    <li className={styles.menuItem} key={key}>
      <NavLink className={styles.menuLink} to={to}>
        {children}
      </NavLink>
    </li>
  );
};

export default MenuItem;
