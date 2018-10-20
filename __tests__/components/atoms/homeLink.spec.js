import React from 'react';
import { shallow } from 'enzyme';

// Component
import HomeLink from '../../../src/components/atoms/HomeLink';

describe('HomeLink', () => {
  it('should have the correct item', (done) => {
    const wrapper = shallow(<HomeLink />);

    expect(wrapper.find('img').length).toEqual(1);
    done();
  });
});
