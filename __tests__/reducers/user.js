import userReducer from '../../src/store/reducers';

describe('user reducer', () => {
  it('', () => {
    expect(userReducer()).toEqual({
      user: {
        isAuthenticated: false,
        user: {},
      },
    });
  });
});
