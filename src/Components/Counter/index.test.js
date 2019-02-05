import React from 'react';
import renderer from 'react-test-renderer';
import {shallow} from 'enzyme';
import Counter from './index';

describe('Counter', () =>{
  it('should render a  button', () => {
    const tree = renderer.create(<Counter/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Should test the initalValue', () => {
    const wrapper = shallow(<Counter initialValue = {10} />);
    expect(wrapper.instance().state.count).toEqual(10);
  });
  it('Should increment the state.count', () => {
    const wrapper = shallow(<Counter initialValue = {10} />);
    wrapper.instance().incrementCount();
    expect(wrapper.instance().state.count).toEqual(11);
  });
  it('Should decrement the state.count', () => {
    const wrapper = shallow(<Counter initialValue = {10} />);
    wrapper.instance().decrementCount();
    expect(wrapper.instance().state.count).toEqual(9);
  });
});