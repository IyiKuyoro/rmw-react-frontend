import React from 'react';

// Components
import StatusNav from '../StatusNav';
import HomeLink from '../../atoms/HomeLink';

// statics
import style from './style.css';

const Header = () => (
  <header className={style.header}>
    <HomeLink />
    <StatusNav />
  </header>
);

export default Header;
