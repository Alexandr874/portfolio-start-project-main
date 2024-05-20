import React from 'react';
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/SectionTitle";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { Fade } from "react-awesome-reveal";
import {S} from "./Skills_Styles";


const skillData = [
    {
        iconId: 'codeSvg',
        title: 'html5',
        description: 'loreLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'css',
        title: 'css3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'react',
        title: 'React',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'typeScript',
        title: 'typescript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'styled',
        title: 'styled components',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    },
    {
        iconId: 'web',
        title: 'WEB DESIgN ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim'
    }
]

export const Skills = () => {
    return (
        <S.Skills id={'skills'}>
            <Container>
                <SectionTitle>My Skills</SectionTitle>
                <FlexWrapper  wrap={'wrap'} justifyContent={'space-between'}>
                    <Fade cascade={true} damping={0.1}>
                        {skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} key={index}
                                          title={s.title}
                                          description={s.description}/>
                        })}

                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};








