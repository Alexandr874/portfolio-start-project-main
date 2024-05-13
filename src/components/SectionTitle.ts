import styled from "styled-components";
import {theme} from "../styles/Theme";
import {font} from "../styles/Common";


 export const SectionTitle = styled.h2`
    ${font({family: "'Josefin Sans', sans-serif", weight: 600, Fmin: 30, Fmax: 36})}
    color: ${theme.colors.font};
     text-align: center;
     letter-spacing: 5px;
     margin-bottom: 90px;
  
    position: relative;
  
    &::before {
        content: "";
        position: absolute;
        width: 55px;
        height: 2px;
        background-color: ${theme.colors.accent};
         left: 50%;
         bottom: -30px;
         transform: translateX(-50%);

     @media ${theme.media.mobile} {
      bottom: -24px;
     }
    }
     
    }
    
`;