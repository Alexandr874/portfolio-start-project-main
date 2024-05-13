import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import { Container } from '../../components/Container';
import {S} from "../footer/Footer_Styled"

const SocialItemsData = [
    {
        iconId: 'instagram'
    },
    {
        iconId: 'telegram'
    },
    {
        iconId: 'vk'
    },
    {
        iconId: 'linkedin'
    }
]


export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
            <FlexWrapper direction={'column'} alignItems={'center'} >
                <S.Name>Александр</S.Name>
                <S.SocialList>
                        {SocialItemsData.map((s, index) => {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialLinc>
                                        <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={s.iconId}/>
                                    </S.SocialLinc>
                                </S.SocialItem>
                            )
                        })}
                </S.SocialList>
                <S.Copiright>© 2023 Svetlana Dyablo, All Rights Reserved.</S.Copiright>
            </FlexWrapper>
            </Container>
        </S.Footer>
    );
};

