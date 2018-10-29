import axios from 'axios';
import { TOGGLE_MODAL, SET_USER } from '../constants';

export const toggleModal = currentState => ({
  type: TOGGLE_MODAL,
  payload: !currentState,
});

export const saveUser = user => ({
  type: SET_USER,
  payload: user,
});

export const login = (info, history) => (dispatch) => {
  toastr.options.closeButton = true;
  toastr.options.closeDuration = 1000;

  return axios.post('https://iyikuyoro-ride-my-way.herokuapp.com/api/v1/auth/login', {
    emailAddress: info.email,
    password: info.password,
  })
    .then((response) => {
      localStorage.setItem('user', JSON.stringify(response.data.data));
      toastr.success('Successfully signed-up to ride my way');
      dispatch(saveUser(response.data));
      dispatch(toggleModal(true));
      history.push('/dashboard');
    })
    .catch((response) => {
      console.log(response);
      toastr.error(response.message || 'Opps, could not log you in at this time');
    });
};
