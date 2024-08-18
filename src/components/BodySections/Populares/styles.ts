import styled from "styled-components";

export const ContainerSearchsMost = styled.div`
    background-color: #bbd0ff;
    width: 70vw;
    height: 60vh;
    margin: 100px auto 0;
    padding: 28px 20px 60px;

    @media (min-width: 360px) and (max-width: 767px) {
        width: 90vw;
        margin-left: 5%;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
    }
`

export const ContentMost = styled.div`
    background-color: #fff;
    width: 68vw;
    height: 56vh;
    margin: -10px auto 0;
    padding: 10px;

    > h2 {
        padding: 30px;
        font-family: Helvetica;
        font-size: 2.3em;
    }

    & .content {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 60vw;
        margin: 0 auto;
        gap: 20px;

        > span {
            > li {
                list-style: none;
                font-family: Helvetica;
                font-size: 14px;
                padding: 20px;
                cursor: pointer;
            }
        }
    }

    @media (min-width: 360px) and (max-width: 767px) {
        width: 90vw;
        margin: -10px auto 0;

        > h2 {
            padding: 12px;
            font-size: 1.8em;
            margin: 0;
        }

        & .content {
            width: 100%;
            gap: 2px;

            > span {
                > li {
                    font-size: 12px;
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
        margin-top: -2px;

        > h2 {
            font-size: 1.8em;
            margin-top: -10px;
        }

        & .content {
            width: 80%;
            gap: 10px;

            > span {
                > li {
                    font-size: 13px;
                }
            }
        }
    }
`;
