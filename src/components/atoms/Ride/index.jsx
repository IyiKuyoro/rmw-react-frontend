import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getRideDetails } from '../../../store/actions/dashboard';
import Button from '../Button';
import style from './style.css';

export const Ride = (props) => {
  const {
    id, from, to, time, seats, getRide,
  } = props;
  return (
    <div className={`${style.card} ${style.wrap_container}`}>
      <div className={`${style.direction} ${style.wrap_container}`}>
        <p>{from}</p>
        <i className={`far fa-arrow-alt-circle-right ${style.direction_icon}`} />
        <p>{to}</p>
      </div>
      <div className={`${style.details} ${style.wrap_container}`}>
        <div className={`${style.info}`}>
          <i className="far fa-clock" />
          <p>{time}</p>
        </div>
        <div>
          <i className="fas fa-chair" />
          <p>{seats}</p>
        </div>
      </div>
      <Button
        className={style.view}
        onClick={() => getRide(id, JSON.parse(localStorage.getItem('user')).token)}
      >
        View
      </Button>
    </div>
  );
};

Ride.propTypes = {
  id: PropTypes.number.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  seats: PropTypes.number.isRequired,
  getRide: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getRide: (id, token) => dispatch(getRideDetails(id, token)),
});

export default connect(null, mapDispatchToProps)(Ride);
