import styled from "styled-components";

export const ContentFlex = styled.div`
    background-image: url(./assets/people.jpg);
    background-size: cover;
    height: 100vh;
    max-width: 100vw;
    padding-top: 1px;

    @media(max-width: 767px) {
        width: 98vw;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100vw;
        
    }
`