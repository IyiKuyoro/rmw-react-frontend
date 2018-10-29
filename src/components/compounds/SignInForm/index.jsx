import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// Actions
import { login } from '../../../store/actions/auth';
// Atoms
import Button from '../../atoms/Button';
// Style
import style from './style.css';

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };
  }

  render() {
    const { email, password } = this.state;
    const { loginAuth, history } = this.props;
    return (
      <form className={style.form}>
        <label className={style.label} htmlFor="email">
          Email
          <input
            id="email"
            className={style.input}
            type="email"
            required
            value={email}
            onChange={(e) => {
              this.setState({
                email: e.target.value,
              });
            }}
          />
        </label>
        <label className={style.label} htmlFor="password">
          Password
          <input
            id="password"
            className={style.input}
            type="password"
            required
            value={password}
            onChange={(e) => {
              this.setState({
                password: e.target.value,
              });
            }}
          />
        </label>
        <Button
          className={style.submit}
          onClick={() => loginAuth({
            email,
            password,
          }, history)}
        >
          Submit
        </Button>
      </form>
    );
  }
}

SignInForm.propTypes = {
  loginAuth: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  loginAuth: (info, history) => dispatch(login(info, history)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignInForm));
