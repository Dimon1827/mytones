import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './NavigationItem.module.scss';

interface INavigationItem {
  key: number;
  to: string;
  children: string;
}

const NavigationItem = ({ key, to, children }: INavigationItem) => {
  return (
    <li key={key}>
      <NavLink className={styles.navigationLink} to={to}>{children}</NavLink>
    </li>
  );
};

export default NavigationItem;
