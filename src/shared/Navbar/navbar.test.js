import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Navbar } from 'AppShared/Navbar/navbar';

configure({ adapter: new Adapter() });

describe('<Navbar />', () => {
    let wrapper;
    const mockgetUserByToken = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<Navbar
            getUserByToken={mockgetUserByToken}
            loggedInUsername={null}
            username={null}
        />);
    });

    it('should call getUserByToken if loggedInUsername prop is null', () => {
        expect(mockgetUserByToken.mock.calls.length).toBe(1);
    });

    it('should set state with values provided', () => {
        const instance = wrapper.instance();
        instance.handleChange({
            target: {
                id: 'searchValue',
                value: 'sample-github-username',
            },
        });
        expect(wrapper.state()).toEqual({
            searchValue: 'sample-github-username',
            redirect: false,
        });
    });
});
