import React from 'react';
import { NavLink } from 'react-router-dom';
import * as styles from './NavigationItem.module.scss';
import { IListItem } from '@/types';

const NavigationItem = ({to, children }: IListItem) => {
  return (
    <li>
      <NavLink className={styles.navigationLink} to={to}>{children}</NavLink>
    </li>
  );
};

export default NavigationItem;
