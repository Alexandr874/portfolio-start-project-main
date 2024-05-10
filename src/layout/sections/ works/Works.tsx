import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import social from '../../../assets/images/proj-1.png'
import project from '../../../assets/images/proj-2.png'
import {Container} from "../../../components/Container";
import {Link} from "../../../components/Link";

export const Works = () => {
    const worksMenuItems = ['All', 'landing page', 'React', 'spa'];
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu menuItems={worksMenuItems}/>
                <FlexWrapper justifyContent={'space-between'} alignItems={'flex-start'}>
                    <Work
                        imige={social}
                        title={'Social Network'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                    <Work
                        imige={project}
                        title={'Timer'}
                        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}/>
                </FlexWrapper>
            </Container>

        </StyledWorks>

    );
};

const StyledWorks = styled.section`
   
`;

