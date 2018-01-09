import React from "react";
import { shallow, mount } from "enzyme";

import App from "./App";


describe('App', () => {
  it('renders null', () => {
    const element = shallow(<App />)
    expect(element.html()).toEqual(null)
  });
})
