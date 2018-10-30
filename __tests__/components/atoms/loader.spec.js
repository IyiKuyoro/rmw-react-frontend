import React from 'react';
import { shallow } from 'enzyme';

import Loader from '../../../src/components/atoms/Loader';

describe('Loader', () => {
  it('should display the approprate element', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper.hasClass('ldscircle')).toEqual(true);
  });
});
