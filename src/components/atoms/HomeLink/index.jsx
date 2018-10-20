import React from 'react';
import { Link } from 'react-router-dom';

// statics
import logo from '../../../static/images/logo.png';
import style from './style.css';

const HomeLink = () => (
  <Link to="/" className={style.home}>
    <img className={style.logo} src={logo} alt="Ride My Way logo, home" />
  </Link>
);

export default HomeLink;
