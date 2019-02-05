import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index';
import {shallow} from 'enzyme';

describe('Button', () =>{
  it('should render a  button', () => {
    const tree = renderer.create(<Button/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should trigger onClick on button press', () => {
    const wrapper = shallow(<Button buttontext='yo' onClick={jest.fn()} />);
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().props.onClick).toHaveBeenCalled();
  })
});