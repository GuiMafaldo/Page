import styled from "styled-components";

export const ContainerContent = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #a3b18a;
    width: 70vw;
    height: 60vh;
    margin: 100px auto 0;
    gap: 20px;

    & .title-and-description {
        margin: 10px 10px 0 10px;
        padding: 40px;

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

    & .porta {
        margin: 120px 80px 0 0;

        > img {
            width: 14vw;
        }
    }

    @media (max-width: 767px) {
        width: 96vw;
        margin-left: 5%;
        flex-direction: row;
        align-items: center;

        & .title-and-description {
            margin-left: -10px;

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

        & .fechadura {
            margin-top:0;
            margin-left: -80px;
            width: 100%;

            > img {
                width: 36vw;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
        flex-direction: row;
        align-items: center;

        & .title-and-description {
            > h2 {
                font-size: 1.6em;
            }

            > p {
                font-size: 14px;
                margin-bottom: 70px;
            }

            > button {
                width: 200px;
                height: 30px;
                font-size: 13px;
                font-weight: 600;
                margin-top: 0;
            }

            > span {
                font-size: 14px;
                margin: 0 auto;
            }
        }

        & .porta {
            margin-top: 100px;

            > img {
                width: 25vw;
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