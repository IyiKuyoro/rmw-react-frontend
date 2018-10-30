import dashboard from '../../src/store/reducers/dashboard';
import { CHANGE_PAGE } from '../../src/store/constants';

describe('dashboard reducer', () => {
  it('CHANGE_PAGE action', () => {
    expect(dashboard(null, {
      type: CHANGE_PAGE,
      payload: {
        data: 'some random data',
      },
    })).toEqual({
      page: {
        data: 'some random data',
      },
    });
  });
});
