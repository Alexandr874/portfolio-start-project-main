import React from 'react';
import styled from "styled-components";
import photo from '../../../assets/images/foto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";


export const Main = () => {
    return (
        <StyledMain>
            <FlexWrapper justifyContent={'space-around'} alignItems={'center'}>
                <div>
                    <span>Hi There</span>
                    <Name>I am Alexandr Kuvenev</Name>
                    <MainTitle>A Web Developer. </MainTitle>
                </div>
                <Photo src={photo}/>

            </FlexWrapper>

        </StyledMain>

    );
};

const StyledMain = styled.div`
    min-height: 100vh;
    background-color: #d3c2c2;
`;

const MainTitle = styled.h1`

`;

const Name = styled.h2`

`;

const Photo = styled.img`
    width: 350px;
    height: 430px;
    object-fit: cover;
`;



