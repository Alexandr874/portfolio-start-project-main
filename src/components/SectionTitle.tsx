import styled from "styled-components";
import {theme} from "../styles/Theme";


 export const SectionTitle = styled.h2`
    color: ${theme.colors.font};
     text-align: center;
     font-family: Josefin Sans, sans-serif;
     font-size: 36px;
     font-weight: 600;
     letter-spacing: 5px;
     margin-bottom: 90px;
  
    position: relative;
  
    &::before {
        content: "";
        position: absolute;
        width: 55px;
        height: 2px;
        background-color: ${theme.colors.accent};
     
     position: absolute;
     top: 70px;
     left: 50%;
     transform: translateX(-50%);
    }
  
  
    
`;