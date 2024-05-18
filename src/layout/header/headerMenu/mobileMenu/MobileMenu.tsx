import React, {useState} from 'react';
import {S} from "../../headerMenu/HederMenu_Stules";
import {Menu} from "../../headerMenu/menu/Menu";



export const MobileMenu: React.FC = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>

            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={() => setMenuIsOpen(false)}>
                <Menu />
            </S.MobileMenuPopup>

        </S.MobileMenu>
    );
};








