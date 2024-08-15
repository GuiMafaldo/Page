import styled from "styled-components";

export const ContentFlex = styled.div`
    background-image: url(./assets/people.jpg);
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    padding-top: 1px;

    @media (max-width: 767px) {
        width: 100vw;
        overflow: hidden;
        padding-top: 0; /* Ajustei para remover o padding desnecessário em dispositivos móveis */
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100vw;
    }
`
