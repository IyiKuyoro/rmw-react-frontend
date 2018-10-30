import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import AuthModal from '../../../src/components/compounds/AuthModal';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('AuthModal is open', () => {
  const store = mockStore({
    auth: {
      modalOpen: true,
    },
  });
  it('should render', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <AuthModal />
        </BrowserRouter>
      </Provider>,
    );

    expect(wrapper.exists()).toBe(true);
  });
});
