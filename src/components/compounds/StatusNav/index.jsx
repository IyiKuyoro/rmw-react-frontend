import React from 'react';

// Statics
import style from './style.css';

const StatusNav = () => {
  return (
    <div className={style.nav}>
      <h1 className={style.nav__text}>Ride My Way</h1>
      <p className={`${style.nav__text} ${style.nav__small}`}>Simply tag along</p>
    </div>
  );
};

export default StatusNav;
