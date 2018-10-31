import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { signup, login } from '../../src/store/actions/auth';

const signUpURL = 'https://iyikuyoro-ride-my-way.herokuapp.com/api/v1/auth/signup';
const loginURL = 'https://iyikuyoro-ride-my-way.herokuapp.com/api/v1/auth/login';

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

const expectedAction = [
  {
    type: 'SET_USER',
    payload: {
      data: {
        status: 'success',
        data: 'some random data',
      },
    },
  },
  {
    payload: false,
    type: 'TOGGLE_MODAL',
  },
];

describe('auth actions', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('signup should trigger the right actions', (done) => {
    moxios.stubRequest(signUpURL, {
      status: 200,
      response: {
        data: {
          data: 'some random data',
          status: 'success',
        },
      },
    });

    const store = mockStore({
      user: {},
      modalOpen: false,
    });

    store
      .dispatch(signup({
        data: 'all the user data',
      }, { push: () => {} }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
        done();
      });
  });

  it('login should trigger the right actions', (done) => {
    moxios.stubRequest(loginURL, {
      status: 200,
      response: {
        data: {
          data: 'some random data',
          status: 'success',
        },
      },
    });

    const store = mockStore({
      user: {},
      modalOpe: false,
    });

    store
      .dispatch(login({
        data: 'all the user data',
      }, { push: () => {} }))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
        done();
      });
  });
});
