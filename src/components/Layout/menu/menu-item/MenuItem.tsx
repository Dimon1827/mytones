import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from '../Menu.module.scss';

interface IMenuItem {
  key: number;
  to: string;
  children: string;
}

const MenuItem = ({ children, to, key }: IMenuItem) => {
  return (
    <li className={styles.menuItem} key={key}>
      <NavLink className={styles.menuLink} to={to}>
        {children}
      </NavLink>
    </li>
  );
};

export default MenuItem;
