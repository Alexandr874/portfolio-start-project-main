import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import social from '../../../assets/images/proj-1.png'
import project from '../../../assets/images/proj-2.png'
import {Container} from "../../../components/Container";
import { motion, AnimatePresence } from "framer-motion"
import {S} from "./work/Works_Styles"



const tabsItems: Array<{status: TabStatusType, title: string}> = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'landing page',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'spa',
        status: 'spa'
    }
];

const worksData = [
    {
        imige: social,
        title: 'Social Network',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        type: 'spa',
        id: 1
    },
    {
        imige:project,
        title: 'Timer',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit  ut labore et dolore magna aliqua Ut enim',
        type: 'react',
        id: 2

    }
]

export const Works: React.FC = () => {
    const[curentFilterStatus, setCurentFilterStatus] = useState('all');

    let filterWorks = worksData

    if(curentFilterStatus === 'landing')  {
        filterWorks = worksData.filter(work => work.type === 'landing')
    }

    if(curentFilterStatus === 'react')  {
        filterWorks = worksData.filter(work => work.type === 'react')
    }

    if(curentFilterStatus === 'spa')  {
        filterWorks = worksData.filter(work => work.type === 'spa')
    }

    function changeFilterStatus(value: TabStatusType)  {
        setCurentFilterStatus(value)
    }

    return (
        <S.Works id={'works'}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         curentFilterStatus={curentFilterStatus}/>
                <FlexWrapper justifyContent={'space-between'} alignItems={'flex-start'} wrap={'wrap'}>
                    <AnimatePresence>
                        {filterWorks.map((w, index) => {
                            return (
                                <motion.div style={{width: "330px",
                                    flexGrow: 1,  maxWidth: "540px"}}
                                    key={w.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    layout={true}
                                >
                                    <Work imige={w.imige} key={w.id}
                                          title={w.title}
                                          text={w.text}/>
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>
                </FlexWrapper>
            </Container>
        </S.Works>

    );
};


