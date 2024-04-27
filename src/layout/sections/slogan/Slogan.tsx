import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";

 export const Slogan = () => {
    return (
        <StyledSlogan>
            <SectionTitle>I Am Available For Freelance</SectionTitle>
            <Button type={"submit"}>Hire Me</Button>
        </StyledSlogan>
    );
};


 const StyledSlogan = styled.section`
     min-height: 50vh;
     background-color: rgba(4, 3, 3, 0.73);
 `;

