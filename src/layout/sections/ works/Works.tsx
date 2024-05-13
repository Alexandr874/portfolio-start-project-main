import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import social from '../../../assets/images/proj-1.png'
import project from '../../../assets/images/proj-2.png'
import {Container} from "../../../components/Container";
import {S} from "./work/Works_Styles"


const worksMenuItems = ['All', 'landing page', 'React', 'spa'];

const worksData = [
    {
        imige: social,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
        imige:project,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'

    }
]

export const Works: React.FC = () => {

    return (
        <S.Works>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksMenuItems}/>
                <FlexWrapper justifyContent={'space-between'} alignItems={'flex-start'} wrap={'wrap'}>
                    {worksData.map((w, index) => {
                       return <Work
                           imige={w.imige} key={index}
                           title={w.title}
                           text={w.text}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>

    );
};


