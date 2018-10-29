import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import store from '../../src/store';

// Component
import Landing from '../../src/pages/Landing';

describe('Landing', () => {
  it('', () => {
    const wrapper = shallow(<Provider store={store}><Landing /></Provider>);

    expect(wrapper.exists()).toEqual(true);
  });
});
