import React from 'react';
import styled from "styled-components";
import {theme} from "../../../styles/Theme";

export const HeaderMenu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledHeaderMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link href="#">
                            {item}
                        </Link>
                    </ListItem>
                })}

            </ul>
        </StyledHeaderMenu>
    );
};

const StyledHeaderMenu = styled.nav`
    ul{
        display: flex;
        gap: 30px;
       justify-content: center;
    }
`;



const Link = styled.a`
    font-family: Josefin Sans, sans-serif;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
   
`;


const ListItem = styled.li`
    
`;





