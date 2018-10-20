import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Statics
import style from './style.css';

const StatusNav = (props) => {
  const { isAuth } = props;

  if (!isAuth) {
    return (
      <div className={style.nav}>
        <h1 className={style.nav__text}>Ride My Way</h1>
        <p className={`${style.nav__text} ${style.nav__small}`}>Simply tag along</p>
      </div>
    );
  }

  return (
    <div>
      User
    </div>
  );
};

StatusNav.propTypes = {
  isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuth: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(StatusNav);
