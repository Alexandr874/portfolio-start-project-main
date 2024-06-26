import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Slider = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 500px;
    width: 100%;
    cursor: pointer;
   
`;
const Slide = styled.div`
    text-align: center;
`;

const Text = styled.p`
    
`;

const Name = styled.span`
   
    font-family: Josefin Sans, sans-serif;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    display: inline-block;
    margin: 22px 0 42px;
`;

const Pagination = styled.div`
    span {
        display: inline-block;
        height: 7px;
        width: 7px;
        border-radius: 20px;
        background-color: rgba(255, 255, 255, 0.5);
        
        & + span {
            margin-left: 5px;
        }
        
        &.active {
            width: 20px;
            height: 7px;
            border-radius: 20px;
            background-color: ${theme.colors.accent};
        }
       
    }
    
`;

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}