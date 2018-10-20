import React from 'react';
import { Link } from 'react-router-dom';

// Components
import StatusNav from 'Compounds/StatusNav';

// statics
import logo from 'Images/logo.png';
import style from './style.css';

const Header = () => (
  <header>
    <Link to="/">
      <img className={style.logo} src={logo} alt="Ride My Way logo, home" />
    </Link>
    <StatusNav />
  </header>
);

export default Header;
