import React from 'react';
import { shallow, mount } from 'enzyme';

import AdminPageCard from '../../components/AdminPageCard';
import { handleNav, handlePublish, handleDelete, checkPubStatus } from '../../helpers/AdminPageCardHelper';

const page = {
  id: 1,
  title: 'hello',
  content: 'some random content',
  navigation: false,
  published: false
};

const userNav = [];
const addToNav = jest.fn();
const removeFromNav = jest.fn();
const togglePublish = jest.fn();
const toggleNav = jest.fn();
const toggleNavPublish = jest.fn();

describe('AdminPageCard', () => {
  const wrapper = mount(
    <AdminPageCard id='one'
                   title='hello'
                   content='some random content'
                   userNav={userNav}
                   addToNav={addToNav}
                   removeFromNav={removeFromNav}
                   togglePublish={togglePublish}
                   toggleNav={toggleNav}
                   toggleNavPublish={toggleNavPublish}
                   handleNav={handleNav}
    />
  );

  it('should contain one page card', () => {
    expect(wrapper.find('.page-card').length).toEqual(1);
    expect(wrapper.find('#one').length).toEqual(1);
  });

  it('should render a title if passed as a prop', () => {
    expect(wrapper.find('.page-title').text()).toBe('hello');
  });

  it.skip('should call handleNav when add/remove from nav btn is clicked', () => {
    const handleNav = jest.fn();
    const toggleNavBtn = wrapper.find('.add-to-nav-btn');
    toggleNavBtn.simulate('click');

    expect(handleNav).toHaveBeenCalledTimes(1);
  });
});
