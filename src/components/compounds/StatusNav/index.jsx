import React from 'react';
import PropTypes from 'prop-types';

// Statics
import style from './style.css';

const StatusNav = (props) => {
  const { page } = props;
  return (
    <div className={page === 'landing' ? style.nav_white : style.nav_black}>
      <h1 className={style.nav__text}>Ride My Way</h1>
      <p className={`${style.nav__text} ${style.nav__small}`}>Simply tag along</p>
    </div>
  );
};

StatusNav.propTypes = {
  page: PropTypes.string.isRequired,
};

export default StatusNav;
