import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/foto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";
import {font} from "../../../styles/Common";


export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper justifyContent={'space-around'} alignItems={'center'} wrap={'wrap'}>
                    <div>
                        <SmallText>Hi There</SmallText>
                        <Name>I am <span>Alexandr Kuvenev</span></Name>
                        <MainTitle>A Web Developer. </MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo}/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>

    );
};

const StyledMain = styled.section`
    min-height: 100vh;
    background-color: #d3c2c2;
    display: flex;
    align-items: center;
`;

const SmallText = styled.span`
    font-size: 14px;
    font-weight: 400;
`;

const MainTitle = styled.h1`
    ${font({
        weight: 400,
        Fmin: 20,
        Fmax: 27
    })}
    
`;

const Name = styled.h2`
    ${font({
        family:"'Josefin Sans', sans-serif",
        weight: 700,
        Fmin: 36,
        Fmax: 50
    })}
    letter-spacing: 5%;
    margin: 10px 0;
    
    span {
        position: relative;
        z-index: 0;
        white-space: nowrap;
        
        &::before {
            content: '';
            display: inline-block;
            width: 100%;
            height: 20px;
            background-color: ${theme.colors.accent};
            
            position: absolute;
            z-index: -1;
            bottom: 0;
        }
    }
    
    @media ${theme.media.mobile} {
        margin: 15px 0;
    }
`;

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 0;
    margin-top: 65px;
    
    &::before {
        content: '';
        width: 360px;
        height: 470px;
        border: 5px solid ${theme.colors.accent};
        
        
        position: absolute;
        top: -24px;
        left: 24px;
        z-index: -1;
        
        @media ${theme.media.mobile} {
            width: 314px;
            height: 414px;
            top: -17px;
            left: 20px;
        }
    }
`;

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 20px;
    
    @media ${theme.media.mobile} {
        width: 310px;  
        height: 380px;
        
    }
`;



