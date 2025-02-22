import styled from "styled-components";

export const ContainerContent = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    background-color: #023e8a;
    width: 70vw;
    height: 60vh;
    margin: 100px auto 0;
    padding: 0 20px;

    & .phone {
        margin-top: 100px;
        > img {
            width: 14vw;
            margin-left: 30px;
        }
    }

    & .title-and-description {
        margin-top: 20px;
        margin-left: 30px;
        padding: 30px;

        > h2 {
            color: #fff;
            font-family: Helvetica;
            font-size: 2em;
            margin-bottom: 20px;
        }

        > p {
            color: #fff;
            font-family: Helvetica;
            font-weight: 500;
        }

        > button {
            background-color: #fff;
            padding: 18px;
            margin-top: 40px;
            font-weight: 700;
            margin-bottom: 30px;
            border: none;
            border-radius: 25px;
            cursor: pointer;
        }

        > span {
            font-weight: 600;
            margin-left: 13px;
            color: #fff;
            cursor: pointer;
        }
    }

    & .acordo {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #fefae0;
        padding: 60px;
        margin-right: -20px;
        width: 500px;

        > h2 {
            font-size: 2.2em;
            font-family: Helvetica;
            margin-left: 20px;
        }

        & .acordo-image {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 30px 80px 30px;

            img {
                width: 100px;
            }
        }
    }

    @media (min-width: 360px) and (max-width: 767px) {
        width: 90vw;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 5%;

        & .title-and-description {
            padding: 2px;
            margin-left: -8px;

            > h2 {
                font-size: 1.3em;
                margin-bottom: 40px;
            }

            > p {
                font-size: 12px;
                width: 270px;
            }
        }

        & .phone {
            display: none;
            margin: 0 auto;
            margin-left: -40px;
            margin-right: 20px;

            > img {
                width: 26vw;
            }
        }

        & .acordo {
            padding: 30px;
            margin-left: 10px;
            margin-right: -16px;

            > h2 {
                font-size: 1em;
                margin-left: -20px;
                margin-bottom: 30px;
            }

            & .acordo-image {
                width: 40px;
                margin: 0 auto;
                margin-left: 6px;

                > img {
                    width: 30px;
                    margin-right: 22%;
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80vw;

        & .phone {
            margin-top: 100px;
            margin-left: 30px;
        }

        & .title-and-description {
            > h2 {
                font-size: 1.6em;
            }

            > p,
            > span {
                font-size: 14px;
            }
        }

        & .acordo {
            > h2 {
                margin-top: 100px;
                font-size: 1.6em;
            }

            & .acordo-image {
                width: 140px;

                > img {
                    margin-right: 50px;
                }
            }
        }
    }
`
