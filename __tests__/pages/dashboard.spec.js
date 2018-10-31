import React from 'react';
import { shallow } from 'enzyme';

import { Dashboard } from '../../src/pages/Dashboard';

describe('Dashboard', () => {
  it('should render the dashboard', () => {
    const wrapper = shallow(<Dashboard showRideDetails setUser={() => {}} history={{ push: () => {} }} />);

    expect(wrapper.exists()).toEqual(true);
  });
});
