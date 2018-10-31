import React from 'react';
import { shallow } from 'enzyme';
import { Ride } from '../../../src/components/atoms/Ride';

describe('ride', () => {
  it('should render', () => {
    const wrapper = shallow(<Ride from="somewhere" to="another" time="03:00AM" seats={2} getRide={() => {}} />);

    expect(wrapper.children().length).toEqual(3);
    expect(wrapper.childAt(0).childAt(0).text()).toEqual('somewhere');
    expect(wrapper.childAt(0).childAt(2).text()).toEqual('another');
    expect(wrapper.childAt(1).childAt(0).childAt(1).text()).toEqual('03:00AM');
    expect(wrapper.exists()).toEqual(true);
  });
});
