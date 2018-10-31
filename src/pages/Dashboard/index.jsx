import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import toastr from 'toastr';
import PropTypes from 'prop-types';
import Header from '../../components/compounds/Header';
import NavBarComponent from '../../components/compounds/NavBar';
import Ride from '../../components/atoms/Ride';
import OfferRideComponent from '../../components/compounds/OfferRide';
import Requests from '../../components/compounds/Request';
import ViewRideModal from '../../components/compounds/ViewRideModal';
import { saveUser } from '../../store/actions/auth';
import style from './style.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rides: [],
      loading: true,
    };
  }

  componentDidMount() {
    let { user } = this.props;
    const { history, setUser } = this.props;

    if (localStorage.user) {
      user = JSON.parse(localStorage.getItem('user'));

      if (user) {
        setUser(user);
      }
    }

    if (user) {
      return axios.get('https://iyikuyoro-ride-my-way.herokuapp.com/api/v1/rides',
        {
          headers: {
            jwt: user.token || user.data.token,
            'Content-Type': 'application/json; charset=utf-8',
          },
        })
        .then((res) => {
          this.setState({
            rides: res.data.data.rides,
          });
        })
        .catch((err) => {
          localStorage.clear();
          history.push('/');
          toastr.error(err.response.data.message || 'Opps, somethings has gone wrong');
        });
    }

    return history.push('/');
  }

  render() {
    const { rides } = this.state;
    const { currentPage, showRideDetails } = this.props;
    return (
      <div>
        {showRideDetails ? <ViewRideModal /> : null}
        <div className={style.header__wrapper}>
          <Header className={style.header} />
        </div>
        <div className={style.navbar__wrapper}>
          <NavBarComponent />
        </div>
        {
          <div className={`${style.wrap_container} ${style.full_width}`}>
            {currentPage === 'rides' ? (
              <div className={`${style.wrap_container} ${style.full_width}`}>
                <h2 className={style.page_title}>All Rides</h2>
                {rides.map(ride => (
                  <Ride
                    key={ride.id}
                    id={ride.id}
                    from={ride.origin}
                    to={ride.destination}
                    time={ride.time}
                    seats={ride.avaliableSpace}
                  />
                ))}
              </div>
            ) : ''}
            {currentPage === 'offer' ? <OfferRideComponent /> : ''}
            {currentPage === 'request' ? <Requests rides={rides} /> : ''}
          </div>
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
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
  }),
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  currentPage: PropTypes.string,
  setUser: PropTypes.func.isRequired,
  showRideDetails: PropTypes.bool.isRequired,
};

Dashboard.defaultProps = {
  user: undefined,
  currentPage: 'rides',
};

const mapStateToProps = state => ({
  currentPage: state.dashboard.page,
  user: state.auth.user,
  showRideDetails: state.dashboard.showRideDetails,
});

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(saveUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
