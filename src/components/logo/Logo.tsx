import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {animateScroll as scroll} from "react-scroll";

export const Logo: React.FC = () => {
    return (
        <div>
            <a onClick={() => {scroll.scrollToTop()}}>
                <Icon iconId={"codeSvg"}/>
            </a>
        </div>
    );
};

