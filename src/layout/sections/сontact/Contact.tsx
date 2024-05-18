import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import { Container } from '../../../components/Container';
import {S} from "./Contact_Styles";

export const Contact: React.FC = () => {
    return (
        <S.Contact id={'contact'}>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <S.Form>
                    <S.Field placeholder={"Имя"}/>
                    <S.Field placeholder={"Тема"}/>
                    <S.Field as={"textarea"} placeholder={"Сообщение"}/>
                    <Button type={"submit"}>Send message</Button>
                </S.Form>
            </Container>
        </S.Contact>
    );
};



