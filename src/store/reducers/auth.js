import { SET_USER, TOGGLE_MODAL } from '../constants';

const initialState = {
  modalOpen: false,
  user: undefined,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case TOGGLE_MODAL:
      return {
        ...state,
        modalOpen: action.payload,
      };
    default:
      return state;
  }
};

export default auth;
