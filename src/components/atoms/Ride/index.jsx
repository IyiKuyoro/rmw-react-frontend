import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';
import style from './style.css';

const Ride = (props) => {
  const {
    from, to, time, seats,
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
      <Button className={style.view}>View</Button>
    </div>
  );
};

Ride.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  seats: PropTypes.number.isRequired,
};

export default Ride;
