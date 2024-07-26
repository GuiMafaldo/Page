import styled from "styled-components";

export const CardsContainer = styled.div`
    display: flex;
    max-width: 1024px;
    width: 100vw;
    height: 40vh;
    margin: 0 auto;
    margin-top: 140px;
`
export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0 auto;

    > img {
        width: 200px;
        height: 20vh; 
    }

    > h3{
        font-family: Helvetica;
        font-weight: 500;
    }

    span {
        font-family: Helvetica;
        font-weight: 600;
        color: #000;
    }

    p {
        font-family: Helvetica;
        font-weight: 500;
    }
`
