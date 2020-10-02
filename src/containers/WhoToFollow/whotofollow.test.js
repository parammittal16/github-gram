import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WhoToFollowCard from 'AppComponents/WhoToFollowCard';

import { FollowCard } from 'AppContainers/WhoToFollow/whotofollow';


configure({ adapter: new Adapter() });

describe('<Navbar />', () => {
    let wrapper;
    const mockgetAllUsersProfile = jest.fn();
    const mockdeleteUser = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<FollowCard
            getAllUsersProfile={mockgetAllUsersProfile}
            deleteUser={mockdeleteUser}
            userProfileData={null}
        />);
    });

    it('should load getAllUsersProfile on component load', () => {
        expect(mockgetAllUsersProfile.mock.calls.length).toBe(1);
    });

    it('should return Loader if userProfileData is null', () => {
        wrapper.setProps({ userProfileData: null });
        expect(wrapper.find('#loader')).toHaveLength(1);
    });

    it('should return Loader if userProfileData is null', () => {
        wrapper.setProps({ userProfileData: [{ id: 1234 }, { id: 1235 }, { id: 1236 }] });
        expect(wrapper.find(WhoToFollowCard)).toHaveLength(3);
    });

    it('should return delete User Profile prop when handleDeletedUser is executed by child props', () => {
        const instance = wrapper.instance();
        wrapper.setProps({ userProfileData: [{ id: 1234 }, { id: 1235 }, { id: 1236 }] });
        instance.handleDeletedUser();
        expect(mockdeleteUser.mock.calls.length).toBe(1);
    });

    it('should show the snackbar when handleClick is executed by child props', () => {
        const instance = wrapper.instance();
        instance.handleClick();
        expect(wrapper.state().open).toEqual(true);
    });

    it('should close the snackbar when handleClose is executed by child props', () => {
        const instance = wrapper.instance();
        instance.handleClose();
        expect(wrapper.state().open).toEqual(false);
    });
});
