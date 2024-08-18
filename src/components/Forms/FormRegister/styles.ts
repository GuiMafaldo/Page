import styled from "styled-components";

export const ContainerFormulario = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    max-width: 380px;
    margin: 100px auto 0 160px;
    width: 100%;
    height: 65vh;
    gap: 40px;
    border-radius: 12px;
    padding: 12px;

    > h2 {
        color: #000;
        font-family: Helvetica;
        text-align: left;
        margin: 20px 14px 0;
    }

    > div {
        margin: 0 auto;
        border-radius: 12px;
        background-color: #fff;

        & .active {
            background-color: #669bbc;
            color: #fff;
        }

        > button {
            padding: 12px;
            border: 0;
            border-radius: 12px;
            color: #000;
            font-family: Helvetica;
            font-weight: 700;
            cursor: pointer;
        }
    }

    & .proprietario {
        background-color: #fff;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-radius: 12px;
        padding: 20px;
        margin-top: 10px;

        > p, span {
            font-family: Helvetica;
            font-weight: 600;
            font-size: 14px;
            cursor: pointer;
        }

        @media (max-width: 767px) {
            width: 378px;
            padding: 22px;
            margin: -22px 0 0 -6px;
        }

        @media (min-width: 768px) and (max-width: 1024px) {
            margin-top: -20px;
        }
    }

    @media(min-width: 360px) and (max-width: 767px) {
        width: 100%;
        height: 74vh;
        padding: 6px;
        margin: 80px 30px 0;

        > h2 {
            font-size: 1.3em;
            margin-bottom: -10px;
        }

        > div > button {
            padding: 12px;
            width: 70px;
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        margin-left: auto;
        margin-top: 120px;
        padding-bottom: 20px;
    }
`;

export const ContentForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 26px;

    > input {
        padding: 16px;
        border: 1px solid #e3e3e3;
        border-radius: 6px;
        max-width: 320px;
        margin-left: 12px;
        width: calc(100% - 24px);
    }

    & .select-quartos {
        display: flex;
        justify-content: space-between;
        gap: 20px;

        span {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 12px;
            width: 100px;
            background-color: #fff;
            border: 1px solid #e3e3e3;
            border-radius: 6px;

            > select {
                border: none;
                padding: 8px;
                background-color: transparent;
                cursor: pointer;
            }

            > img {
                width: 30px;
            }
        }

        @media(min-width: 360px) and (max-width: 767px) {
            flex-direction: column;
            align-items: center;
            gap: 10px;
            padding: 8px;
            margin-bottom: -14px;

            span {
                width: 100%;
                justify-content: space-between;
            }
        }
    }

    > button {
        width: 80%;
        margin: 0 auto;
        padding: 14px;
        background-color: #669bbc;
        color: #fff;
        font-weight: 700;
        font-family: Helvetica;
        border: none;
        border-radius: 20px;
        cursor: pointer;

        @media (min-width: 360px) and (max-width: 767px) {
            width: 80%;
        }
    }
`
