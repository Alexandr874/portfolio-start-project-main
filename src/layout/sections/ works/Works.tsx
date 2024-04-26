import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Menu} from "../../../components/menu/Menu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import social from '../../../assets/images/proj-1.png'
import project from '../../../assets/images/proj-2.png'

export const Works = () => {
    const worksMenuItems = ['All', 'landing page', 'React', 'spa'];
    return (
        <StyledWorks>
            <SectionTitle>My Works</SectionTitle>
            <Menu menuItems={worksMenuItems}/>
            <FlexWrapper justifyContent={'space-around'}>
                <Work
                    imige={social}
                    title={'Social Network'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'}/>
                <Work
                    imige={project}
                    title={'Timer'}
                    text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim'}/>
            </FlexWrapper>
        </StyledWorks>

    );
};

const StyledWorks = styled.section`
    min-height: 100vh;
    background-color: rgba(255, 215, 0, 0.41);
`;

