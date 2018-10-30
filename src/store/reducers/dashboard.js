import { CHANGE_PAGE } from '../constants';

const initialState = {
  page: 'rides',
};

const dashboard = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_PAGE:
      return {
        ...state,
        page: action.payload,
      };
    default:
      return state;
  }
};

export default dashboard;
