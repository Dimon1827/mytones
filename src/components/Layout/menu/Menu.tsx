import React from 'react';
import * as styles from './Menu.module.scss';
import { menu, library, playlist, others } from './menu-data';
import MenuItem from './menu-item/MenuItem';
const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <img
        className={styles.logo}
        src="/icons/logo.svg"
        alt="Лого Mytones"
        width={131}
        height={24}
      />
      <div className={styles.menuWrapper}>
        <h2 className={styles.title}>Menu</h2>
        <ul className={styles.menuList}>
          {menu.map(({ name, to }, index) => {
            return (
              <MenuItem to={to} key={index}>
                {name}
              </MenuItem>
            );
          })}
        </ul>
        <h2 className={styles.title}>Library</h2>
        <ul className={styles.menuList}>
          {library.map(({ name, to }, index) => {
            return (
              <MenuItem to={to} key={index}>
                {name}
              </MenuItem>
            );
          })}
        </ul>
        <h2 className={styles.title}>Playlist</h2>
        <ul className={styles.menuList}>
          {playlist.map(({ name, to }, index) => {
            return (
              <MenuItem to={to} key={index}>
                {name}
              </MenuItem>
            );
          })}
        </ul>
        <h2 className={styles.title}>Others</h2>
        <ul className={styles.menuList}>
          {others.map(({ name, to }, index) => {
            return (
              <MenuItem to={to} key={index}>
                {name}
              </MenuItem>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Menu;
