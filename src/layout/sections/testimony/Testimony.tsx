import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {S} from "../skills/Skills_Styles";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony>
            <Container>
            <FlexWrapper direction={"column"} alignItems={"center"}>
                <SectionTitle>Testimony</SectionTitle>
                <S.IconWrapper>
                    <Icon iconId={"guote"}/>
                </S.IconWrapper>
                <Slider/>
            </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 50vh;
    background-color: rgba(0, 178, 255, 0.41);
    
    ${S.IconWrapper} {
        margin: 40px 0 70px;
    }
    
`;
