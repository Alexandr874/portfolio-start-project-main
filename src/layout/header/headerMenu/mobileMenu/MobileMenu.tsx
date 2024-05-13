import React from 'react';
import {S} from "../../headerMenu/HederMenu_Stules";
import {Menu} from "../../headerMenu/menu/Menu";



export const MobileMenu: React.FC<{menuItems: Array<string>}> = (props: {menuItems: Array<string>}) => {
    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={false}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={false}>
                <Menu menuItems={props.menuItems}/>
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};








