import moxios from 'moxios';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import { getRideDetails } from '../../src/store/actions/dashboard';

const getRideURL = 'https://iyikuyoro-ride-my-way.herokuapp.com/api/v1/rides/1';

const middleWares = [thunk];
const mockStore = configureMockStore(middleWares);

const expectedAction = [
  {
    payload: undefined,
    type: 'CHANGE_SINGLE_RIDE',
  },
];

describe('dashboard action', () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should trigger the correct action', (done) => {
    moxios.stubRequest(getRideURL, {
      status: 200,
      response: {
        data: {
          data: 'some random data',
          status: 'success',
        },
      },
    });

    const store = mockStore({
      page: 'rides',
      ride: {},
      showRideDetails: false,
    });

    store
      .dispatch(getRideDetails(1, 'sdjbsvkdjbcvd'))
      .then(() => {
        expect(store.getActions()).toEqual(expectedAction);
        done();
      });
  });
});
