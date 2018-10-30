import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../atoms/Button';
import { changePage } from '../../../store/actions/dashboard';
import style from './style.css';

export const NavBar = (props) => {
  const { currentPage, change } = props;

  return (
    <nav className={style.navbar}>
      <Button
        className={`${style.nav_button} ${currentPage === 'rides' ? style.selected : ''}`}
        onClick={() => change('rides')}
      >
        Rides
      </Button>
      <Button
        className={`${style.nav_button} ${currentPage === 'offer' ? style.selected : ''}`}
        onClick={() => change('offer')}
      >
        Offer
      </Button>
      <Button
        className={`${style.nav_button} ${currentPage === 'request' ? style.selected : ''}`}
        onClick={() => change('request')}
      >
        Request
      </Button>
      <Button
        className={`${style.nav_button} ${currentPage === 'sign out' ? style.selected : ''}`}
        onClick={() => change('sign out')}
      >
        Sign Out
      </Button>
    </nav>
  );
};

NavBar.propTypes = {
  currentPage: PropTypes.string.isRequired,
  change: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentPage: state.dashboard.page,
});

const mapDispatchToProps = dispatch => ({
  change: newpage => dispatch(changePage(newpage)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
