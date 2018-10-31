import React from 'react';
import { Link } from 'react-router-dom';

// statics
import logo from '../../../static/images/logo.png';
import style from './style.css';

const HomeLink = () => (
  <Link to="/" className={style.home}>
    <i className={`far fa-registered ${style.logo}`} />
  </Link>
);

export default HomeLink;
