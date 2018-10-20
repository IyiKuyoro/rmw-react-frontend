import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const StatusNav = (props) => {
  const { isAuth } = props;

  return (
    <div>
      {!isAuth ? (
        <div>
          <h1>Ride My Way</h1>
          <p>Simply tag along</p>
        </div>
      ) : (
        <div>
          User
        </div>
      )}
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
