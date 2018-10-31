import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import toastr from 'toastr';
import validator from 'validator';
import { signup } from '../../../store/actions/auth';
import Button from '../../atoms/Button';
import style from './style.css';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      lastname: '',
      sex: 'male',
      dob: '',
      mobile: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  render() {
    const {
      firstname, lastname, sex, dob, mobile, email, password, confirmPassword,
    } = this.state;
    const { signupAuth, history } = this.props;
    return (
      <form className={style.form}>
        <label className={style.label} htmlFor="firstname">
          First Name
          <input
            id="firstname"
            className={style.input}
            type="text"
            required
            value={firstname}
            onChange={(e) => {
              this.setState({
                firstname: e.target.value,
              });
            }}
          />
        </label>
        <label className={style.label} htmlFor="lastname">
          Last Name
          <input
            id="lastname"
            className={style.input}
            type="text"
            required
            value={lastname}
            onChange={(e) => {
              this.setState({
                lastname: e.target.value,
              });
            }}
          />
        </label>
        <label className={style.label} htmlFor="sex">
          Sex
          <select
            id="sex"
            className={style.input}
            value={sex}
            onChange={(e) => {
              this.setState({
                sex: e.target.value,
              });
            }}
          >
            <option>
              Male
            </option>
            <option>
              Female
            </option>
          </select>
        </label>
        <label className={style.label} htmlFor="dob">
          DOB
          <input
            id="dob"
            className={style.input}
            type="date"
            required
            value={dob}
            onChange={(e) => {
              this.setState({
                dob: e.target.value,
              });
            }}
          />
        </label>
        <label className={style.label} htmlFor="mobile">
          Phone Number
          <input
            id="mobile"
            className={style.input}
            type="phone-number"
            required
            value={mobile}
            onChange={(e) => {
              this.setState({
                mobile: e.target.value,
              });
            }}
          />
        </label>
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
        <label className={style.label} htmlFor="confirm-password">
          Confirm Password
          <input
            id="confirm-password"
            className={style.input}
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => {
              this.setState({
                confirmPassword: e.target.value,
              });
            }}
          />
        </label>
        <Button
          className={style.submit}
          onClick={() => {
            if (confirmPassword !== password) {
              return toastr.error('Passwords must match');
            }
            if (!validator.isEmail(email)) {
              return toastr.error('Email is invalid');
            }
            if (!validator.isNumeric(mobile)) {
              return toastr.error('Invalid phone number');
            }
            if (firstname.trim() === '' || lastname.trim() === '') {
              return toastr.error('Invalid name');
            }
            if (password.trim() === '') {
              return toastr.error('Please provide a password');
            }
            return signupAuth({
              firstname: firstname.trim(),
              lastname: lastname.trim(),
              sex,
              dob,
              mobile,
              email,
              password,
            }, history);
          }}
        >
          Submit
        </Button>
      </form>
    );
  }
}

SignUpForm.propTypes = {
  signupAuth: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

const mapDispatchToProps = dispatch => ({
  signupAuth: (info, history) => dispatch(signup(info, history)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignUpForm));
