import React from 'react';
import iconSpite from '../../assets/images/icons-sprite.svg';

type iconPropsType={
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon = (props: iconPropsType) => {
    return (
        <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewBox || "0 0 50 50"} fill="none" xmlns="http://www.w3.org/2000/svg">
            <use xlinkHref={`${iconSpite}#${props.iconId}`}/>
        </svg>

);
};

