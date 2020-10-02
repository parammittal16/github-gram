import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
 
import dashboardcard from 'AppComponents/DashboardCard';
import { Dashboard } from 'AppContainers/Dashboard/dashboard';
 
configure({ adapter: new Adapter() });
 
describe('<Dashboard />', () => {
   let wrapper;
   const mockgetUserProfilefn = jest.fn();
   const mockclearErrorfn = jest.fn();
 
   beforeEach(() => {
       wrapper = shallow(<Dashboard
           getUserProfile={mockgetUserProfilefn}
           clearError={mockclearErrorfn}
           match={
               {
                   params: {
                       user: 'sample-user',
                   },
               }
           }
           history={
               {
                   push: () => {},
               }
           }
           isAuthenticated
           userProfileData={null}
           isError={false}
       />);
   });
 
   it('should return Loader if userProfileData is null', () => {
       wrapper.setProps({ userProfileData: null });
       expect(wrapper.find('#loader')).toHaveLength(1);
   });
 
   it('should return Card if userProfileData is not null', () => {
       wrapper.setProps({ userProfileData: {} });
       expect(wrapper.find(dashboardcard)).toHaveLength(1);
   });
 
   it('should not call the mock clear Error function if isError prop was false', () => {
       wrapper.setProps({ isError: false });
       expect(mockclearErrorfn.mock.calls.length).toBe(0);
   });
});
