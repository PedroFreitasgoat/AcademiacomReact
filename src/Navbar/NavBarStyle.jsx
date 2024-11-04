import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../styles/theme";


export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const TitleLink = styled(Link)`
    color: ${props => props.theme.TextColor};
    font-size: 2rem;
    font-weight: bold;
`

export const NavList = styled.ul`
    display: flex;
    align-items: center;
    column-gap: 2rem;
    transition: .5s;

    @media (max-width: 767px) {
        flex-direction: column;
        row-gap: 5rem;
        padding: 5rem;
        background-color: ${props => props.theme.ContainerColor};
        position: fixed;
        width: 350px;
        min-height: 100vh;
        top: 55px;
        box-shadow: 0 2px 6px hsla(45,100%,15%,0.15);
        right: 0;
    }
`;

export const NavItem = styled.li`
`

export const NavLink = styled(Link) `
    font-size: 1.5rem;
    color: ${props => props.theme.TextColor};
    transition: .4s;

    &:hover {
        color: ${props => props.theme.PrimaryColor};
    }

    @media ${device.tablet} {
        font-size: 1.5rem;
    }

    @media ${device.laptop} {
        font-size: 2rem;
    }
`

export const NavIcon = styled.div`
    svg {
        font-size: 2.2rem;
        cursor: pointer;
        fill: ${props => props.theme.TextColor};
    }
`

export const HamBurger = styled.div`
    font-size: 2rem;
    cursor: pointer;
    color: ${props => props.theme.TextColor};

    @media ${device.tablet} {
        display: none;
    }
`