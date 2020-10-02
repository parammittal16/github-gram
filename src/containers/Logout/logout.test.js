import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Redirect } from 'react-router-dom';
 
import { Logout } from 'AppContainers/Logout/logout';
 
configure({ adapter: new Adapter() });
 
describe('<Logout />', () => {
   it('should return Redirect to /', () => {
       const wrapper = shallow(<Logout onLogout={() => {}} />);
       expect(wrapper.contains(<Redirect to="/" />)).toEqual(true);
   });
});
