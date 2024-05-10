import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {IconWrapper} from "../skills/skill/Skill";

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
            <FlexWrapper direction={"column"} alignItems={"center"}>
                <SectionTitle>Testimony</SectionTitle>
                <IconWrapper>
                    <Icon iconId={"guote"}/>
                </IconWrapper>
                <Slider/>
            </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: rgba(0, 178, 255, 0.41);
    
    ${IconWrapper} {
        margin: 40px 0 70px;
    }
    
`;
