import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import styled from "styled-components";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <SectionTitle>Contact</SectionTitle>
            <StyledForm>
                <Field placeholder={"Имя"}/>
                <Field placeholder={"Тема"}/>
                <Field as={"textarea"} placeholder={"Сообщение"}/>
                <Button type={"submit"}>Send message</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 100vh;
    background-color: rgba(35, 40, 41, 0.41);
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    max-width: 500px; 
    width: 100%;
    gap: 10px;
`;

const Field = styled.input`
    
`;


