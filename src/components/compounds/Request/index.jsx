import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Button from '../../../components/atoms/Button';
import style from './style.css';

const Requests = (props) => {
  const { rides, user } = props;
  return (
    <div className={`${style.wrap_container} ${style.full_width}`}>
      <h2 className={style.page_title}>Your Rides</h2>
      {rides.map((item) => {
        if (item.driverId === user.iD) {
          return (
            <div key={item.id} className={style.ride_card}>
              <div className={`${style.direction} ${style.wrap_container}`}>
                <p>{item.origin}</p>
                <i className={`far fa-arrow-alt-circle-right ${style.direction_icon}`} />
                <p>{item.destination}</p>
              </div>
              <div className={`${style.details} ${style.wrap_container}`}>
                <div className={`${style.wrap_container} ${style.space}`}>
                  <i className="far fa-clock" />
                  <p>{item.time}</p>
                </div>
                <div className={`${style.wrap_container} ${style.space}`}>
                  <i className="fas fa-chair" />
                  <p>{item.avaliableSpace}</p>
                </div>
              </div>
              {item.requests.length > 0 ? <Button className={style.view}>Requests</Button> : ''}
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

Requests.propTypes = {
  rides: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  user: PropTypes.shape({
    emailAddress: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    friends: PropTypes.string.isRequired,
    iD: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    mobileNumber: PropTypes.string.isRequired,
    ridesOffered: PropTypes.string.isRequired,
    ridesTaken: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Requests);
