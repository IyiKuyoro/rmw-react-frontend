import React from 'react';

// Components
import StatusNav from '../StatusNav';
import HomeLink from '../../atoms/HomeLink';

// statics
import style from './style.css';

const Header = ({ className, page, ...props }) => (
  <header {...props} className={`${style.header} ${className}`}>
    <HomeLink page={page} />
    <StatusNav page={page} />
  </header>
);

export default Header;
