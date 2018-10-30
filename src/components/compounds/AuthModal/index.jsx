import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
// Actions
import { toggleModal } from '../../../store/actions/auth';
// Atoms
import Button from '../../atoms/Button';
// Compounds
import SignInForm from '../../compounds/SignInForm';
import SignUpForm from '../../compounds/SignUpForm';
// Style
import style from './style.css';

export class AuthModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      signup: true,
    };
  }

  render() {
    const { isOpen, toggle } = this.props;
    const { signup } = this.state;
    return (
      <div
        className={`${style.modal__overlay} ${isOpen ? style.modal__overlay_open : style.modal__overlay_close}`}
      >
        <div className={style.modal}>
          <i
            className={`fas fa-times-circle ${style.close_icon}`}
            onClick={() => toggle(isOpen)}
            onKeyUp={() => toggle(isOpen)}
            role="button"
            tabIndex={0}
          />
          <div className={style.tab__container}>
            <Button
              className={`${style.signin} ${style.auth_type} ${!signup ? style.selected : ''}`}
              onClick={() => {
                this.setState({
                  signup: false,
                });
              }}
            >
              SIGN-IN
            </Button>
            <Button
              className={`${style.signup} ${style.auth_type} ${signup ? style.selected : ''}`}
              onClick={() => {
                this.setState({
                  signup: true,
                });
              }}
            >
              SIGN-UP
            </Button>
          </div>
          {!signup ? <SignInForm /> : <SignUpForm />}
        </div>
      </div>
    );
  }
}

AuthModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  toggle: curState => dispatch(toggleModal(curState)),
});

const mapStateToProps = state => ({
  isOpen: state.auth.modalOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthModal);
