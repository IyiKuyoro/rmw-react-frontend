import { CHANGE_PAGE } from '../constants';

export const changePage = newpage => ({
  type: CHANGE_PAGE,
  payload: newpage,
});
