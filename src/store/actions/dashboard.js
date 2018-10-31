import axios from 'axios';
import toastr from 'toastr';
import { CHANGE_PAGE, CHANGE_SINGLE_RIDE, CLOSE_SINGE_RIDE } from '../constants';

export const changePage = newpage => ({
  type: CHANGE_PAGE,
  payload: newpage,
});

export const closeSingleRide = () => ({
  type: CLOSE_SINGE_RIDE,
});

const singleRide = ride => ({
  type: CHANGE_SINGLE_RIDE,
  payload: ride,
});

export const getRideDetails = (id, token) => (dispatch) => {
  toastr.options.closeButton = true;
  toastr.options.closeDuration = 1000;

  return axios.get(`https://iyikuyoro-ride-my-way.herokuapp.com/api/v1/rides/${id}`, {
    headers: {
      jwt: token,
    },
  })
    .then((response) => {
      dispatch(singleRide(response.data.data.ride));
    })
    .catch((error) => {
      toastr.error(error.response.data.message || 'Opps, somethings has gone wrong');
    });
};
