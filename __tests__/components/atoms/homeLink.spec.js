import React from 'react';
import { shallow } from 'enzyme';

// Component
import HomeLink from '../../../src/components/atoms/HomeLink';

describe('HomeLink', () => {
  it('should have the correct item', (done) => {
    const wrapper = shallow(<HomeLink page="landing" />);

    expect(wrapper.find('i').length).toEqual(1);
    done();
  });
});
