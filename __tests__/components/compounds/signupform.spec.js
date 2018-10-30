import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import SignUpForm from '../../../src/components/compounds/SignUpForm';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe('SignUpForm', () => {
  const store = mockStore({
  });
  it('should render', () => {
    const wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <SignUpForm />
        </BrowserRouter>
      </Provider>,
    );

    expect(wrapper.exists()).toBe(true);
  });
});
