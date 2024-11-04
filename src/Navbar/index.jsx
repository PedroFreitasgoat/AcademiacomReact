import React  from "react";
import { ContainerStyle } from "../components/common/CommonStyle";
import { NavbarContainer, NavIcon, NavItem, NavLink, NavList, TitleLink } from "./NavBarStyle";
import {BsSun} from "react-icons/bs";



export default function NavBar() {
    return (
        <ContainerStyle>
            <NavbarContainer>
                <TitleLink to="/">
                    Fitness pro
                </TitleLink>
                <NavList>
                    <NavItem>
                        <NavLink to="/">Princing</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/">Download</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/">Class</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/">LifeStyle</NavLink>
                    </NavItem>
                    <NavIcon>
                        <BsSun />
                    </NavIcon>
                </NavList>
            </NavbarContainer>
        </ContainerStyle>
    )
}