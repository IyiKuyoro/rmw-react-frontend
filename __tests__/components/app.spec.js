import React from 'react';
import { shallow } from 'enzyme';

import App from '../../src/app';

describe('<App />', () => {
  test('render()', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.exists()).toBe(true);
  });
});
