import React from 'react';
import { shallow } from 'enzyme';

// Component
import Button from '../../../src/components/atoms/Button';

describe('Button', () => {
  it('should render correct content', (done) => {
    const wrapper = shallow(<Button>FIND RIDE</Button>);

    expect(wrapper.text()).toEqual('FIND RIDE');
    done();
  });
});
