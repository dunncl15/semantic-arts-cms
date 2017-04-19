import React from 'react';
import { shallow } from 'enzyme';

import Page from '../../components/Page';

const page = {
  id: 1,
  title: 'testing',
  content: 'adfasdfasdfdfaf'
}


describe('Page', () => {
  const wrapper = shallow(<Page page={page} />)

  it('should render one page article', () => {
    const article = wrapper.find('.public-page');
    expect(article.length).toEqual(1);
  });

  it('should have an id passed from props', () => {
    const article = wrapper.find('.public-page');
    expect(article.props().id).toEqual(1);
  });

  it('should have a title passed from props', () => {
    const article = wrapper.find('.public-page');
    expect(article.props().children[0].props.children).toEqual('testing')
  });

  it('should have a body passed from props', () => {
    const article = wrapper.find('.public-page');
    expect(article.props().children[1].props.dangerouslySetInnerHTML).toEqual({ __html: 'adfasdfasdfdfaf' });  
  });
});
