import React from 'react';
import { shallow } from 'enzyme';
import { ViewRideModal } from '../../../src/components/compounds/ViewRideModal';

const closeModal = () => {};
const ride = {
  driverId: '1',
  id: 1,
  driverName: 'Jack John',
  origin: 'somewhere',
  destination: 'nowhere',
  time: 'time time',
  allowStops: true,
  description: 'none stop all the way',
  avaliableSpace: 2,
};

describe('ViewRideModal', () => {
  it('should render the ride', () => {
    const wrapper = shallow(<ViewRideModal ride={ride} closeModal={closeModal} />);

    wrapper.childAt(0).childAt(0).simulate('click');
    wrapper.childAt(0).childAt(0).simulate('keyup');
    expect(wrapper.exists()).toBe(true);
  });
});
