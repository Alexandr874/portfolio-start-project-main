import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} alignItems={'center'}>
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
        </StyledFooter>
    );
};

const StyledFooter = styled.section`
    min-height: 30vh;
    background-color: rgba(21, 175, 205, 0.41);
`;

const Name = styled.span`

`;

const SocialList = styled.ul`
    display: flex;
    gap: 20px;
`;

const SocialItem = styled.li`
    
`;

const SocialLinc = styled.a`

`;

const Copiright = styled.small`

`;