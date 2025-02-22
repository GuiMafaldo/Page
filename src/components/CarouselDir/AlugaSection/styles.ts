import styled from "styled-components";

export const ContainerContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #d4a373;
    width: 70vw;
    height: 60vh;
    margin: 100px auto 0;
    gap: 20px;

    & .title-and-description {
        margin: 20px 30px;
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
            margin-left: 30px;
            cursor: pointer;
            color: #fff;
        }
    }

    & .poltrona {
        margin-top: 120px;

        > img {
            width: 16vw;
        }
    }

    @media(min-width: 360px) and (max-width: 767px) {
        width: 90vw;
        margin-left: 5%;
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 20px;


        & .title-and-description {
            margin-left: 1px;

            > h2 {
                font-size: 1.7em;
                margin-bottom: 40px;
            }

            > p {
                font-size: 13px;
                width: 280px;
            }

            > span {
                margin-left: 20px;
                font-size: 13px;
                color: #fff;
            }

             > button {
                width: 76%;
                font-size: 12px; 
            }
        }

        & .poltrona {
            margin: 20px 30px 0 -90px;
            width: 100%;

            > img {
                width: 32vw;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
        display: flex;
        flex-direction: column;
        align-items: center;

        & .title-and-description {
            > h2 {
                font-size: 1.6em;
            }

            > p {
                font-size: 14px;
            }

            > button {
                width: 200px;
                height: 30px;
                font-size: 13px;
                font-weight: 600;
                margin-top: 70px;
            }

            > span {
                font-size: 14px;
                text-align: center;
                color: #fff;
            }
        }

        & .poltrona {
            margin-top: 100px;

            > img {
                width: 30vw;
            }
        }
    }
`
export const CarouselContent = styled.div`
    display: block;
    width: 30vw;

    & .content-image {
        img {
            width: 580px;
            height: 552px;
        }
    }

    @media (max-width: 767px) {
        display: none;
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        display: block;

        & .content-image {
            img {
                width: 40vw;
                height: 60vh;
            }
        }
    }
`

