import React from 'react';

// Components
import StatusNav from '../StatusNav';
import HomeLink from '../../atoms/HomeLink';

// statics
import style from './style.css';

const Header = ({ className, ...props }) => (
  <header {...props} className={`${style.header} ${className}`}>
    <HomeLink />
    <StatusNav />
  </header>
);

export default Header;
