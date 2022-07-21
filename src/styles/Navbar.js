import styled from "styled-components"

export const Nav = styled.nav`
    width: 100vw;
    height: 4rem;
    display: flex;  
    justify-content: space-between;
    padding: 0px 40px;
    align-items: center;
`

export const Logo = styled.h1`
    font-size: 1.4rem;
    color: white;

    span{
        color: #ce0da4;
    }

    &::before{
        content: "<";
    }
    &::after{
        content: ">";
    }
`

export const Links = styled.ul`
    display: flex;
    width: 300px;
    justify-content: space-between;
`