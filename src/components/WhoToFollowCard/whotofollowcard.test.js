import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Card, CardMedia, CardContent } from '@material-ui/core';
import WhoToFollowCard from 'AppComponents/WhoToFollowCard';

configure({ adapter: new Adapter() });

describe('<WhoToFollowCard />', () => {
    it('should render', () => {
        const wrapper = shallow(
            <WhoToFollowCard
                data={{}}
                getUserToBeShown={() => { }}
                getUserToBeFollowed={() => { }}
                getDeletedUserId={() => { }}
            />,
        );
        expect(wrapper.find(Card, CardContent, CardMedia)).toHaveLength(1);
    });
});
