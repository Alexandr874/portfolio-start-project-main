import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../FlexWrapper";

export const Slider = () => {
    return (
        <StyledSlider>
            <FlexWrapper>
                <Slide>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Text>
                    <Name>@ivan ivanow</Name>
                </Slide>
            </FlexWrapper>
            <Pagination>
                <span> </span>
                <span> </span>
                <span> </span>
            </Pagination>
        </StyledSlider>
    );
};

const StyledSlider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: crimson 1px solid;
    max-width: 500px;
`;
const Slide = styled.div`
    text-align: center;
`;

const Text = styled.p`

`;

const Name = styled.span`

`;

const Pagination = styled.div`
    span {
        display: inline-block;
        height: 20px;
        width: 20px;
        margin: 5px;
        background-color: crimson;
    }
    
`;