import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
    position: relative;
    padding: 40px 0 40px;
    background-color: ${theme.colors.primaryBg};
`;

const Name = styled.span`
    ${font({family: "'Josefin Sans', sans-serif", weight: 700, Fmin: 16, Fmax: 22})}
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
    transition: ${theme.animation.transition};
    
    
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

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLinc,
    Copiright
}