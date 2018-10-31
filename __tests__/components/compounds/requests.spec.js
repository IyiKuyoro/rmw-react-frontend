import React from 'react';
import { shallow } from 'enzyme';
import { Requests } from '../../../src/components/compounds/Request';

const rides = [{
  driverId: 1,
  id: 1,
  origin: 'some place',
  destination: 'nowhere',
  time: 'time time',
  avaliableSpace: 2,
  requests: [1, 2, 3, 4],
}, {
  driverId: 2,
  id: 1,
  origin: 'some place',
  destination: 'nowhere',
  time: 'time time',
  avaliableSpace: 2,
  requests: [1, 2, 3, 4],
}];
const user = {
  iD: '1',
};

describe('Requests', () => {
  it('should render the ride', () => {
    const wrapper = shallow(<Requests rides={rides} user={user} />);

    expect(wrapper.exists()).toBe(true);
  });
});
