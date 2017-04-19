import React from 'react';
import { shallow, mount } from 'enzyme';

import App from '../../components/App';

describe('App', () => {
  const wrapper = shallow(<App />)

  it('should contain seven routes', () => {
    expect(wrapper.find('Route').length).toEqual(7)
  });

  it('should contain a main-content section', () => {
    expect(wrapper.find('.main-content').length).toEqual(1);
  });

});
