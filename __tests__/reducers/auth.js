import authReducer from '../../src/store/reducers/auth';
import { SET_USER } from '../../src/store/constants';

describe('user reducer', () => {
  it('SET_USER action', () => {
    expect(authReducer(null, {
      type: SET_USER,
      payload: {
        data: 'some random data',
      },
    })).toEqual({
      user: {
        data: 'some random data',
      },
    });
  });

  it('default', () => {
    expect(authReducer({ data: 'initial data' }, {
      type: 'random',
      payload: {},
    })).toEqual({
      data: 'initial data',
    });
  });
});
