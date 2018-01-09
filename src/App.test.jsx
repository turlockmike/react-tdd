import React from "react";
import { shallow } from "enzyme";

import App from "./App";

it("renders correctly Right", () => {
  const element = shallow(<App />);
  expect(element.text()).toEqual("Clicks: 0")
  element.find('button').simulate('click')
  expect(element.text()).toEqual("Clicks: 1")
});
