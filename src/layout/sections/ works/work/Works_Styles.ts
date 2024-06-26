import styled from "styled-components";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {theme} from "../../../../styles/Theme";
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/Button";

//Works
const Works = styled.section`
    position: relative;
   ${FlexWrapper} {
       gap: 30px;
   }
`;

//Work
const Work = styled.div`
     background-color: ${theme.colors.secondaryBg};

     ${Link} {
         padding: 10px 0;
         
         & + ${Link} {
             margin-left: 20px;
         }
     }
    
 `;

const ImageWrapper = styled.div`
    position: relative;

    ${Button} {
        position: absolute;
        opacity: 0;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -30%);
        transition: ${theme.animation.transition};

        &::before {
            width: 100%;
            height: 100%;
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        backdrop-filter: blur(2px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;
        transition: ${theme.animation.transition};
    }
    
    
    &:hover {
        ${Button} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
        
        &::before {
           opacity: 1; 
        }
    }
    
   @media ${theme.media.tablet} {
       ${Button} {
           opacity: 1;
       }

       &::before {
           opacity: 1;
       }
   }
    `;


const Imige = styled.img`
     //height: 100%;
     width: 100%;
     object-fit: contain;
 `;

const Title = styled.h3`
 
 `;

const Text = styled.p`
     margin: 14px 0 18px;
 
 `;

const Description = styled.div`
    padding: 25px 20px;
 `;





export const S = {
    Works,
    Work,
    ImageWrapper,
    Imige,
    Title,
    Text,
    Description,
}