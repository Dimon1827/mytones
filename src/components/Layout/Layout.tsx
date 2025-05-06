import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Menu from './menu/Menu'
import * as styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Menu />
      <Outlet />
    </div>
  );
}

export default Layout