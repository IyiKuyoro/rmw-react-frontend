import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../../components/compounds/Header';
import NavBar from '../../components/compounds/NavBar';
import Ride from '../../components/atoms/Ride';
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
    const { user, history } = this.props;
    if (user) {
      console.log(user);
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
          console.log(err);
        });
    }

    return history.push('/');
  }

  render() {
    const { rides } = this.state;
    const { currentPage } = this.props;
    return (
      <div>
        <div className={style.header__wrapper}>
          <Header className={style.header} />
        </div>
        <div className={style.navbar__wrapper}>
          <NavBar />
        </div>
        {currentPage === 'rides' ? (
          <div className={`${style.wrap_container} ${style.full_width}`}>
            {rides.map(ride => (
              <Ride
                from={ride.origin}
                to={ride.destination}
                time={ride.time}
                seats={ride.avaliableSpace}
              />
            ))}
          </div>
        ) : ''}
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
};

Dashboard.defaultProps = {
  user: undefined,
  currentPage: 'rides',
};

const mapStateToProps = state => ({
  currentPage: state.dashboard.page,
  user: state.auth.user,
});

export default connect(mapStateToProps)(Dashboard);
