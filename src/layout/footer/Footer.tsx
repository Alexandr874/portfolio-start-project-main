import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import { Container } from '../../components/Container';
import {theme} from "../../styles/Theme";


export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
            <FlexWrapper direction={'column'} alignItems={'center'} >
                <Name>Александр</Name>
                <SocialList>
                    <SocialItem>
                        <SocialLinc>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={'instagram'}/>
                        </SocialLinc>
                    </SocialItem>
                    <SocialItem>
                        <SocialLinc>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={'telegram'}/>
                        </SocialLinc>
                    </SocialItem>
                    <SocialItem>
                        <SocialLinc>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={'vk'}/>
                        </SocialLinc>
                    </SocialItem>
                    <SocialItem>
                        <SocialLinc>
                            <Icon height={'21px'} width={'21px'} viewBox={'0 0 21 21'} iconId={'linkedin'}/>
                        </SocialLinc>
                    </SocialItem>
                </SocialList>
                <Copiright>© 2023 Svetlana Dyablo, All Rights Reserved.</Copiright>
            </FlexWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 40px 0 40px;
    background-color: ${theme.colors.primaryBg};
`;

const Name = styled.span`
    font-family: Josefin Sans, sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 3px;
`;

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
    margin: 30px 0 30px;
    
    
`;

const SocialItem = styled.li`
    
`;

const SocialLinc = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;
    
    
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    width: 35px;
    height: 35px;
    
    color: ${theme.colors.accent};
    
    &:hover {
        background-color: ${theme.colors.primaryBg};
        transform: translateY(-4px);
    }
`;

const Copiright = styled.small`
    font-size: 12px;
    font-weight: 400;
    opacity: 0.5;
   
`;