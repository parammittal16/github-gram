import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Redirect } from 'react-router-dom';
 
import { Login } from 'AppContainers/Login/login';
 
configure({ adapter: new Adapter() });
 
describe('<Login />', () => {
   let wrapper;
   const mockonAuthfn = jest.fn();
   const mockclearErrorfn = jest.fn();
 
   beforeEach(() => {
       wrapper = shallow(<Login
           username="sample-username"
           isAuthenticated={false}
           isError={false}
           onAuth={mockonAuthfn}
           clearError={mockclearErrorfn}
       />);
   });
 
   it('should return Redirect to /users/:username if isAuthenticated', () => {
       wrapper.setProps({ isAuthenticated: true });
       expect(wrapper.contains(<Redirect to="/users/sample-username" />)).toEqual(true);
   });
 
   it('should not return Redirect to /users/:username if not isAuthenticated', () => {
       wrapper.setProps({ isAuthenticated: false });
       expect(wrapper.contains(<Redirect to="/users/sample-username" />)).toEqual(false);
   });
 
   it('should not call the mock clear Error function if isError prop was false', () => {
       wrapper.setProps({ isError: false });
       expect(mockclearErrorfn.mock.calls.length).toBe(0);
   });
 
   it('should call the mock clear Error function if isError prop was true', () => {
       wrapper.setProps({ isError: true });
       expect(mockclearErrorfn.mock.calls.length).toBe(1);
   });
 
   it('should not call the mock login function when front-end validations fail', () => {
       wrapper.find('#loginForm').simulate(
           'submit',
           { preventDefault() { } },
       );
       expect(mockonAuthfn.mock.calls.length).toBe(0);
   });
 
   it('should call the mock login function on Login Form Submittion with values provided', () => {
       wrapper.find('#username').simulate(
           'change',
           {
               target: {
                   id: 'username',
                   value: 'sample-github-username',
               },
           },
       );
       wrapper.find('#token').simulate(
           'change',
           {
               target: {
                   id: 'token',
                   value: 'your-token',
               },
           },
       );
       wrapper.find('#loginForm').simulate(
           'submit',
           { preventDefault() { } },
       );
       expect(mockonAuthfn.mock.calls[0][0]).toEqual(
           {
               username: 'sample-github-username',
               token: 'your-token',
               open: false,
               errMessage: '',
           },
       );
   });
});
