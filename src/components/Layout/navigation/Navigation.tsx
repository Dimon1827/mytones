import React from 'react';
import * as styles from './Navigation.module.scss';
import data from './navigation-data';
import NavigationItem from './navigation-item/NavigationItem';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navigationList}>
        {data.map((item, index) => {
          return (
            <NavigationItem key={index} to={item.to}>
              {item.name}
            </NavigationItem>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
