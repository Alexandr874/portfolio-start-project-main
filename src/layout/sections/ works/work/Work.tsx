import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/Button";

type WorkPropsType = {
    imige: string
    title: string
    text: string
}

 export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <ImageWrapper>
                <Imige src={props.imige}/>
                <Button>view project</Button>
            </ImageWrapper>
            
            <Description>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
                <Link href="#">demo</Link>
                <Link href="#">Code</Link>
            </Description>

        </StyledWork>
    );
};

 const StyledWork = styled.div`
     background-color: ${theme.colors.secondaryBg};
     max-width: 540px;
     width: 100%;

     ${Link} {
         padding: 10px 0;
         
         & + ${Link} {
             margin-left: 20px;
         }
     }
 `;

const ImageWrapper = styled.div`
    position: relative;
    
    
    &:hover {
        ${Button} {
            opacity: 1;
        }
        
        &::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            left: 0;
            bottom: 0;
            backdrop-filter: blur(8px);
            background: rgba(0, 0, 0, 0.3);
        }
    }
    
    ${Button} {
        position: absolute;
        opacity: 0;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        
        &::before {
            width: 100%;
            height: 100%;
        }
    }
    
    
    `;


 const Imige = styled.img`
     width: 100%;
     height: 350px;
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
 




