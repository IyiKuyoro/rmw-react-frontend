import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// statics
import style from './style.css';

const HomeLink = (props) => {
  const { page } = props;
  return (
    <Link to="/" className={page === 'landing' ? style.home_white : style.home_black}>
      <i className={`far fa-registered ${style.logo}`} />
    </Link>
  );
};

HomeLink.propTypes = {
  page: PropTypes.string.isRequired,
};

export default HomeLink;
