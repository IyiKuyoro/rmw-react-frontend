import React from 'react';
import { shallow } from 'enzyme';

import { SignUpForm } from '../../../src/components/compounds/SignUpForm';

describe('SignUpForm', () => {
  it('should render', () => {
    const wrapper = shallow(<SignUpForm history={{ push: () => {} }} signupAuth={() => {}} />);

    wrapper.childAt(0).find('.input').simulate('change', {
      target: { value: 'hello' },
    });
    wrapper.childAt(1).find('.input').simulate('change', {
      target: { value: 'hello' },
    });
    wrapper.childAt(3).find('.input').simulate('change', {
      target: { value: 'hello' },
    });

    expect(wrapper.exists()).toBe(true);
  });
});
