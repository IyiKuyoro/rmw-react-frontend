import React from 'react';
import { shallow } from 'enzyme';

// Component
import Landing from '../../src/pages/Landing';

describe('Landing', () => {
  it('', () => {
    const wrapper = shallow(<Landing />);

    expect(wrapper.exists()).toEqual(true);
  });
});
