import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header/Header';
import Menu from './menu/Menu';
import * as styles from './Layout.module.scss';
import RightSidebar from '../screens/home/right-sidebar/RightSidebar';

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <Outlet />
      <RightSidebar />
    </div>
  );
};

export default Layout;
