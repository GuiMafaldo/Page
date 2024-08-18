import styled from "styled-components";

export const ContainerHeader = styled.div`
    background-color: #000;
    opacity: 0.8;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-top: -160px;
    width: 100%;
    padding: 2px;
    position: fixed;
    z-index: 1;

    > div {
        display: flex;
        align-items: center;
        margin-right: 160px;

        > button {
            width: 80px;
            margin-right: 30px;
            background-color: #fff;
            padding: 10px;
            border: none;
            border-radius: 20px;
            font-weight: 700;
            font-family: Helvetica;
            cursor: pointer;
            transition: all 0.5s ease;

            &:hover {
                background-color: #669bbc;
                color: #fff;
            }
        } 
    }

    @media (min-width: 360px) and (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        height: 20vh;
        top: 1;
        left: 0;

        > div {
            margin: -12px 0;
            > button {
                display: none;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 10px;
        justify-content: center;

        > div {
            margin-right: 20px;

            > button {
                margin-right: 10px;
            }
        }
    }
`
export const ContentHeader = styled.div`
    width: 100%;
    height: 13vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
    margin: 0 auto;
    margin-left: 120px;

    h1 {
        color: #fff;
        font-family: Helvetica;
        font-size: 1.8em;
    }

    img {
        width: 100px;
    }

    @media (min-width: 360px) and (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        align-items: center;
        text-align: center;
        height: auto;

        h1 {
            font-size: 1.3em;
        }

        img {
            margin-top: 30px;
            width: 80px;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        gap: 24px;

        h1 {
            font-size: 1.6em;
        }

        img {
            width: 90px;
        }
    }
`;
