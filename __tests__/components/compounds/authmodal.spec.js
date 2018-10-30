import React from 'react';
import { shallow } from 'enzyme';

import { AuthModal } from '../../../src/components/compounds/AuthModal';

describe('AuthModal is open', () => {
  it('should render', () => {
    const wrapper = shallow(<AuthModal toggle={() => {}} isOpen />);

    wrapper.childAt(0).childAt(0).simulate('click');
    wrapper.childAt(0).childAt(0).simulate('keyup');
    wrapper.childAt(0).childAt(1).childAt(0).simulate('click');
    wrapper.childAt(0).childAt(1).childAt(1).simulate('click');
    expect(wrapper.exists()).toBe(true);
  });
});
