import React from 'react';
import { shallow } from 'enzyme';
import { NavBar } from '../../../src/components/compounds/NavBar';

describe('NavBar', () => {
  it('should render the page', () => {
    const wrapper = shallow(<NavBar currentPage="rides" change={() => {}} />);

    wrapper.childAt(0).simulate('click');
    wrapper.childAt(1).simulate('click');
    wrapper.childAt(2).simulate('click');

    expect(wrapper.children().length).toEqual(4);
    expect(wrapper.exists()).toEqual(true);
  });
});
