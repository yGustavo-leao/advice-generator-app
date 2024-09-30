import styled from "styled-components";

export const Container = styled.main`
    position: relative;
    padding: 2rem;
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    border-radius: 20px;
    font-family: "Manrope", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    background: #323a49;
`

export const Title = styled.h1`
    text-align: center;
    letter-spacing: 3px;
    font-size: 1rem;
    color: #52ffa8;
`

export const Id = styled.span`
`

export const Advice = styled.p`
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    color: #cee3e9;
    max-width: 600px;
`

export const Divider = styled.img`
    margin-bottom: 3rem;
    width: 100%;
    max-width: 600px;
    align-self: center;
    display: flex;
    @media (min-width: 600px) {
        content: url(${process.env.PUBLIC_URL}/assets/images/pattern-divider-desktop.svg);
    }
`

export const Button = styled.button`
    width: max-content;
    height: max-content;
    cursor: pointer;
    transition: .2s;
    display: flex;
    padding: 1.5rem;
    border-radius: 50%;
    position: absolute;
    bottom: -3rem;
    align-self: center;
    background: #52ffa8;
    border: none;

    &:hover {
        box-shadow: 0px 0px 40px #52ffa8;
    }

    &:active {
        transform: scale(.5);
    }
`

export const Dice = styled.img`
    width: 40px;
    height: 40px;
`