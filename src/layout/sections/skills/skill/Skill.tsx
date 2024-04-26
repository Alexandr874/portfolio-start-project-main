import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
    iconId: string
    title: string
    description: string

}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <Icon iconId={props.iconId}/>
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.description}</SkillText>
        </StyledSkill>
    );
};
const StyledSkill = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 25%;
    
    margin: 10px;
    background-color: rgba(216, 212, 212, 0.43);
`;

const SkillTitle = styled.h3`

`;

const SkillText = styled.p`

`;


