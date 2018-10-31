import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { closeSingleRide } from '../../../store/actions/dashboard';
import style from './style.css';

export class ViewRideModal extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { closeModal, ride } = this.props;
    return (
      <div className={style.screen}>
        <div className={style.ride_details}>
          <i
            className={`fas fa-times-circle ${style.close_icon}`}
            onClick={() => closeModal()}
            onKeyUp={() => closeModal()}
            role="button"
            tabIndex={0}
          />
          <h3 className={style.driver_name}>{ride.driverName}</h3>
          <ul className={style.list}>
            <li className={style.list_item}>
              <span>From: </span>
              <span className={style.bold}>{ride.origin}</span>
            </li>
            <li className={style.list_item}>
              <span>To: </span>
              <span className={style.bold}>{ride.destination}</span>
            </li>
            <li className={style.list_item}>
              <span>Time: </span>
              <span className={style.bold}>{ride.time}</span>
            </li>
            <li className={style.list_item}>
              <span>Space: </span>
              <span className={style.bold}>{ride.avaliableSpace}</span>
            </li>
            <li className={style.list_item}>
              <span>Stops?: </span>
              <span className={style.bold}>{ride.allowStops ? 'Yes' : 'No'}</span>
            </li>
            <li className={style.list_item}>
              <p>Proposed Route: </p>
              <p className={style.bold}>{ride.description}</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

ViewRideModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  ride: PropTypes.shape({
    allowStops: PropTypes.bool.isRequired,
    avaliableSpace: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    driverId: PropTypes.string.isRequired,
    driverName: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    origin: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeSingleRide()),
});

const mapStateToProps = state => ({
  ride: state.dashboard.ride,
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewRideModal);
