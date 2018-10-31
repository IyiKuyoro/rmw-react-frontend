import React from 'react';
import { shallow } from 'enzyme';

// Component
import Header from '../../../src/components/compounds/Header';

describe('Header', () => {
  it('', () => {
    const wrapper = shallow(<Header page="landing" />);

    expect(wrapper.exists()).toEqual(true);
  });
});
