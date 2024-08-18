import styled from "styled-components";

export const ContainerFooterPage = styled.div`
    background-color: #e1e1e1;
    margin-top: 100px;
    width: 100%;
    height: 70vh;
    padding: 60px;
    padding-bottom: 110px;

    > span {
        margin-left: 214px;
    }

    @media(min-width: 360px)and (max-width: 767px) {
        width: 100%;
        padding: 30px 20px 20px 20px;
        > span {
            margin-left: 0;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        padding-bottom: 130px;
    }
`

export const SectionAbout = styled.section`
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;

    & .about {
        display: flex;
        flex-direction: column;
        gap: 20px;

        > h4 {
            font-family: Helvetica;
            font-size: 22px;
            margin-bottom: 0;
        }

        > span {
            font-family: Helvetica;
            font-size: 18px;
        }
    }

    & .about-card {
        width: 16vw;
        padding: 40px;
        background-color: #134074;

        > h4 {
            color: #fff;
            font-family: Helvetica;
            font-size: 30px;
            margin: 0 0 20px;
        }

        > span, a {
            color: #fff;
            font-family: Helvetica;
            font-size: 14px;
            text-decoration: none;
        }

        > div {
            display: flex;
            align-items: center;

            > img {
                width: 30px;
                height: 30px;
                margin-left: 10px;
                cursor: pointer;
                background-color: #fff;
            }
        }
    }

    @media(min-width: 360px)and (max-width: 767px) {
        width: 90vw;

        & .about {
            width: 100%;
            gap: 20px;

            > h4 {
                font-size: 14px;
            }

            > span {
                font-size: 11px;
            }
        }

        & .about-card {
            display: none;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;

        .about {
            width: 90%;

            > h4 {
                font-size: 18px;
            }

            > span {
                font-size: 14px;
            }
        }

        & .about-card {
            width: 60vw;
            height: 25vh;
            margin-top: 25px;

            > h4 {
                margin-top: -10px;
                font-size: 16px;
            }

            > span {
                font-size: 13px;
            }
        }
    }
`

export const TermsPolitcContent = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
    padding: 60px 0 70px;
    margin: 0 auto;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        width: 100%;
        margin-left: 140px;

        > li {
            font-size: 14px;
            list-style: none;
            text-decoration: underline;
            cursor: pointer;
        }
    }

    & .logotipo {
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;

        img {
            width: 30px;
            margin-right: 6px;
            cursor: pointer;
        }
    }

    @media(min-width: 360px) and (max-width: 767px) {
        flex-direction: column;
        margin-left:3%;
        width: 90%;

        & .logotipo img {
            width: 20px;
        }

        > div {
            padding-top: 6px;
            gap: 20px;

            > li {
                font-size: 11px;
                list-style: none;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80%;

        > li {
            font-size: 12px;
        }

        > img {
            width: 18px;
            height: 22px;
            margin-right: 16px;
        }

        > div {
            gap: 30px;
            padding-top: 10px;

            > li {
                font-size: 16px;
                margin-bottom: 20px;
            }
        }
    }
`

export const LastItmsPage = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 30px;
    width: 70%;
    margin: 0 auto;

    & .creci {
        display: flex;
        align-items: center;
        gap: 40px;
        margin-bottom: 10px;

        & .ver-todos {
            text-decoration: underline;
            cursor: pointer;
        }

        > p {
            font-family: Helvetica;
            font-size: 16px;
        }

        > img {
            width: 26px;
            height: 30px;
            cursor: pointer;
        }
    }

    & .images {
        display: flex;

        > img {
            cursor: pointer;
            height: 40px;
        }
    }

    @media(min-width: 360px) and (max-width: 767px) {
        width: 90%;
        margin-top: -40px;
        padding-bottom: 10px;

        & .creci {
            gap: 12px;

            > p {
                font-size: 11px;
            }

            > img {
                width: 20px;
                height: 20px;
            }
        }

        & .images {
            margin-right: 40px;

            > img {
                height: 22px;
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 100%;
        margin-top: -80px;

        & .creci {
            gap: 20px;

            > p {
                font-size: 14px;
            }

            > img {
                width: 20px;
                height: 26px;
            }
        }

        & .images {
            margin-right: 130px;

            > img {
                height: 30px;
            }
        }
    }
`
