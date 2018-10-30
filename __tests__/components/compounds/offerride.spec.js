import React from 'react';
import { shallow } from 'enzyme';

import { OfferRide } from '../../../src/components/compounds/OfferRide';

describe('OfferRide', () => {
  it('should render', () => {
    const wrapper = shallow(<OfferRide />);

    wrapper.childAt(1).childAt(6).simulate('click');
    wrapper.childAt(1).childAt(5).find('.textarea').simulate('change', {
      target: { value: 'hello' },
    });
    wrapper.childAt(1).childAt(4).find('.input').simulate('change', {
      target: { value: 4 },
    });
    wrapper.childAt(1).childAt(3).find('.input').simulate('change', {
      target: { value: true },
    });
    wrapper.childAt(1).childAt(2).find('.input').simulate('change', {
      target: { value: '03:48 AM' },
    });
    wrapper.childAt(1).childAt(1).find('.input').simulate('change', {
      target: { value: 'Oxborn' },
    });
    wrapper.childAt(1).childAt(0).find('.input').simulate('change', {
      target: { value: 'Ikeja' },
    });

    expect(wrapper.exists()).toEqual(true);
  });
});
