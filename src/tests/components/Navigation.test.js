import React from 'react';
import { shallow, mount } from 'enzyme';
import { browserHistory } from 'react-router';

import Navigation from '../../components/Navigation';

describe('Navigation', () => {
  const wrapper = shallow(<Navigation />);

  it('should contain three navLinks', () => {
    expect(wrapper.find('NavLink').length).toEqual(3);
  });

  it('should link to /admin', () => {
    let dashboard = wrapper.find('.menu-item').first();
    expect(dashboard.props().to).toEqual('/admin')
  });

  it('should link to /admin/pages', () => {

    let pages = wrapper.props().children.props.children[1];
    expect(pages.props.to).toEqual('/admin/pages');
  });

  it('should link to /admin/new-page', () => {
    let createPage = wrapper.find('.menu-item').last();
    expect(createPage.props().to).toEqual('/admin/new-page');
  })
});
