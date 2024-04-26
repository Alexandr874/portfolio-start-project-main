import React from 'react';
import styled from "styled-components";

type WorkPropsType = {
    imige: string
    title: string
    text: string
}

 export const Work = (props: WorkPropsType) => {
    return (
        <StyledWork>
            <Imige src={props.imige}/>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Linc href="#">demo</Linc>
            <Linc href="#">Code</Linc>
        </StyledWork>
    );
};

 const StyledWork = styled.div`
 width: 540px;
 `;

 const Imige = styled.img`
     width: 100%;
     height: 350px;
     object-fit: contain;
 `;

 const Title = styled.h3`
 
 `;

 const Text = styled.p`
 
 `;

 const Linc = styled.a`
 padding-right: 5px;
 `;

