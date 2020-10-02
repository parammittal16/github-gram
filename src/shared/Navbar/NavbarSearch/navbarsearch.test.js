import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Input, Button } from '@material-ui/core';

import NavbarSearch from 'AppShared/Navbar/NavbarSearch/navbarsearch';

configure({ adapter: new Adapter() });

describe('<WhoToFollowCard />', () => {
    it('should render', () => {
        const wrapper = shallow(
            <NavbarSearch
                getChange={() => { }}
                getSubmitedForm={() => { }}
            />,
        );
        expect(wrapper.find(Input, Button)).toHaveLength(1);
    });
});
