import styled from "styled-components";

export const ContainerContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #2a9d8f;
    width: 70vw;
    height: 60vh;
    margin: 100px auto 0;
    gap: 20px;

    & .title-and-description {
        margin-top: 10px;
        margin-left: 30px;
        padding: 30px;

        > h2 {
            color: #fff;
            font-size: 2em;
            font-family: Helvetica;
        }

        > p {
            font-family: Helvetica;
            color: #fff;
        }

        > button {
            padding: 20px;
            border: none;
            border-radius: 25px;
            margin: 40px 0 30px;
            font-family: Helvetica;
            font-size: 16px;
            font-weight: 700;
            cursor: pointer;
        }

        > span {
            font-family: Helvetica;
            margin-left: 10px;
            cursor: pointer;
            color: #fff;
        }
    }

    & .poltrona {
        margin-top: 120px;
        margin-left: 30px;

        > img {
            width: 14vw;
        }
    }

    @media (max-width: 767px) {
        width: 80vw;
        margin: 38px;
        margin-top: 40px;
        display: flex;
        flex-direction: row;
        align-items: center;

        & .title-and-description {
        margin-left: 10px;

            > h2 {
                font-size: 1.8em;
                margin-bottom: 40px;
            }

            > p {
                width: 300px;
                font-size: 14px;
            }

            > span {
                color: #fff;
            }

            > button {
                width: 80%;
                font-size: 14px; 
            }
        }

        & .poltrona {
            margin: 10px 20px 0 0;
            width: 100%;

            > img {
                width: 26vw;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;

        & .title-and-description {
            text-align: center;

            > h2 {
                font-size: 1.6em;
            }

            > p {
                font-size: 14px;
                width: 80%;
                margin-bottom: 70px;
            }

            > button {
                width: 200px;
                height: 30px;
                font-size: 13px;
                font-weight: 600;
                display: flex;
                align-items: center;
                margin-top: 20px;
            }

            > span {
                font-size: 14px;
                margin: 0 auto;
                color: #fff;
            }
        }

        & .poltrona {
            margin-top: 100px;

            > img {
                width: 20vw;
            }
        }
    }
`
export const CarouselContent = styled.div`
    display: block;
    width: 30vw;

    & .content-image {
        img {
            width: 600px;
            height: 552px;
        }
    }

    @media (max-width: 767px) {
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        display: none;
    }
`
