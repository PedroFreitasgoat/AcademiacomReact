import styled from "styled-components";
import { device } from "../../styles/theme";

export const ContainerStyle = styled.div`
    max-width: 968px;
    margin: 0 2.4rem;
    padding: 2rem 0 2rem;

    @media ${device.laptop} {
        margin: 0 auto;
    }
`;

export const StyledButton = styled.button`
    background-color: transparent;
    border: 2px solid ${prosps => prosps.theme.TextColor};
    color: ${props => props.theme.TextColor};
    font-weight: 600;
    border-radius: 3rem;
    outline: none;
    font-size: 1.2rem;
    padding: 1rem 2rem;
    cursor: pointer;
    transition: .2s;

    &:hover {
        color: #fff;
        background-color: ${props => props.theme.PrimaryColor};
        border: 2px solid ${props => props.theme.PrimaryColor};
    }

    @media ${device.tablet} {
        font-size: 1.6rem;
        padding: 1.3rem 2rem;
    }
`;

export const TrialButton = styled(StyledButton)`
    background-color: ${props => props.theme.PrimaryColor};
    border: 2px solid ${props => props.theme.PrimaryColor};

`