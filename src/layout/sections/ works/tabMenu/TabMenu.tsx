import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export type TabStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
    tabItems: Array<{status: TabStatusType, title: string}>,
    changeFilterStatus: (value: TabStatusType) => void,
    curentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
    return (
        <StyledTabMenu>
            <ul>
                {props.tabItems.map((item, index) => {
                    return <ListItem key={index}>
                        <Link active={props.curentFilterStatus === item.status} as={"button"} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link>
                    </ListItem>
                })}

            </ul>
        </StyledTabMenu>
    );
};

const StyledTabMenu = styled.nav`
    
    
    ul{
        display: flex;
        margin: 0 auto;
       justify-content: space-between;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 40px;
    }
`;

const ListItem = styled.li`
    
`;



