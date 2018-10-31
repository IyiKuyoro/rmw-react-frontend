import { CHANGE_PAGE, CHANGE_SINGLE_RIDE, CLOSE_SINGE_RIDE } from '../constants';

const initialState = {
  page: 'rides',
  ride: {},
  showRideDetails: false,
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    case CHANGE_SINGLE_RIDE:
      return {
        ...state,
        ride: action.payload,
        showRideDetails: true,
      };
    case CLOSE_SINGE_RIDE:
      return {
        ...state,
        showRideDetails: false,
      };
    default:
      return state;
  }
};

export default dashboard;
