import React from 'react';
import photo from '../../../assets/images/foto.webp'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import Typewriter from 'typewriter-effect';
import {S}  from "../main/Main_Styles";


export const Main: React.FC = () => {
    return (
        <S.Main>
            <Container>
                <FlexWrapper justifyContent={'space-around'} alignItems={'center'} wrap={'wrap'}>
                    <div>
                        <S.SmallText>Hi There</S.SmallText>
                        <S.Name>I am <span>Alexandr Kuvenev</span></S.Name>
                        <S.MainTitle>
                            <p>A Web Developer.</p>
                            <Typewriter
                                options={{
                                    strings: ['A Web Developer.'],
                                    autoStart: true,
                                    loop: true,
                                    delay: 150
                                }}
                            />
                        </S.MainTitle>
                    </div>
                    <S.PhotoWrapper>
                        <S.Photo src={photo}/>
                    </S.PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>

    );
};





