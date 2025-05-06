import React from 'react';
import * as styles from './Header.module.scss';
import Navigation from '../navigation/Navigation';
import Notification from '@/assets/icons/notif.svg';
import Favorites from '@/assets/icons/like.svg';
const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Navigation />
      <div className={styles.searchWrapper}>
        <input
          className={styles.searchInput}
          type="text"
          placeholder="Search"
        />
      </div>
      <div className={styles.profileContainer}>
        <Favorites className={styles.profileFavorites} />
        <Notification className={styles.profileNotification} />
        <div className={styles.profileWrapper}>
          <img
            className={styles.profileImage}
            src="/images/dog.jpg"
            alt="Аватарка пользователя"
            width={42}
            height={42}
          />
          <p className={styles.profileName}>Dima Drogalov</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
