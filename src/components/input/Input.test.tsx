import * as React from 'react';
import * as enzyme  from 'enzyme';

import {Input} from './Input';

it('Renders the input field with basic requirements', () => {
  const wrapper = enzyme.shallow(<Input name="inputname" value="inputvalue" />);
  console.log("wrapper renders" , wrapper.find("input"));
  expect(wrapper.find("input").text()).toEqual('inputvalue');
});
