import React from "react"
import { shallow } from "enzyme"
import Calculator from "./Calculator"


describe('App', () => {
  it('renders an output element', () => {
    expect(shallow(<Calculator />).find('output').exists()).toEqual(true);
  })
  it('renders an input element', () => {
    expect(shallow(<Calculator />).find('input').exists()).toEqual(true);
  })
  it('renders an button element', () => {
    expect(shallow(<Calculator />).find('button').exists()).toEqual(true);
  })
  it('renders a default output value of 0', () => {
    expect(shallow(<Calculator />).find('output').text()).toEqual('0')
  })
  it('allows a user to set an input a value', () => {
    const wrapper = shallow(<Calculator />)

    wrapper.find('input').simulate('change', {target: {value: '123'}})

    expect(wrapper.find('input').prop('value')).toEqual('123')
  })
  it('adds the input value to the total submit is clicked', () => {
    const wrapper = shallow(<Calculator />)

    wrapper.find('input').simulate('change', {target: {value: '123'}})
    wrapper.find('button').simulate('click')

    expect(wrapper.find('output').text()).toEqual('123')

    wrapper.find('input').simulate('change', {target: {value: '200'}})
    wrapper.find('button').simulate('click')

    expect(wrapper.find('output').text()).toEqual('323')
  })
  it('clears the input after each submission', () => {
    const wrapper = shallow(<Calculator />)

    wrapper.find('input').simulate('change', {target: {value: '123'}})
    wrapper.find('button').simulate('click')

    expect(wrapper.find('input').prop('value')).toEqual('')
  })
})
