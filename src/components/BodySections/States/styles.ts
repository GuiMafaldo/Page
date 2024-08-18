import styled from "styled-components";

export const StatesContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 70vw;
    margin: 0 auto;
    background-color: #d1d1d1; 
    padding-bottom: 100px;

    & .title-and-button {
        margin-top: 120px;
        display: flex;
        flex-direction: column;
        align-items: center; 

        > h2 {
            font-family: Helvetica;
            font-size: 2.6em;
            color: #000;
            margin-bottom: 20px;
        }

        > div {
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center; 
            
            > button {
                width: 100px;
                margin-bottom: 10px;
                padding: 14px;
                color: #000;
                font-weight: 700;
                font-family: Helvetica;
                border: none;
                border-radius: 20px;
                cursor: pointer;
            }

            > .active {
                background-color: #669bbc;
                color: #fff;
            }
        }
    }

    @media (min-width: 360px) and (max-width: 767px) {
        width: 96vw;
        margin-left: 5%;
        margin-top: 100px;
        background-color: #f9f9f9;

        & .title-and-button {
            margin: 30px 0 0 20px;
            > h2 {
                font-size: 1.4em;
                margin-bottom: 60px;
            }

            > div {
                display: flex;
                flex-direction: row;
                background-color: #f9f9f9; 
                
                > button {
                    background-color: #fff;
                } 
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
        margin-top: 80px;

        & .title-and-button {
            > h2 {
                font-size: 1.8em;
                margin-bottom: 40px;
            }
        }
    }
`

export const ContentState = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin: 0 auto;
    gap: 30px;
    overflow-y: hidden;

    & .content-links {
        padding-bottom: 40px;

        > h3 {
            font-family: Helvetica;
            font-size: 2.1em;
            color: #669bbc;
            margin-bottom: 30px;
        }

        > div {
            display: flex;
            flex-direction: column; 
            width: 100%; 
            
            > li {
                font-family: Helvetica;
                font-size: 15px;
                list-style: none;
                margin-bottom: 30px;
                cursor: pointer;
            }
        }
    }

    @media (min-width: 360px) and (max-width: 767px) {
        width: 96vw;
        margin-left: 5%;
        margin-top: 80px;
        display: flex;
        flex-direction: row;

        & .content-links {
            width: 100%;
            > h3 {
                font-size: 1em;
                margin-bottom: 40px;
            }

            > div {
                width: 90%;
                > li {
                    font-size: 12px;
                }
            }
        }
    }

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 80vw;
        margin-top: 20px;

        & .content-links {
            > h3 {
                font-size: 1.3em;
                margin-bottom: 30px;
            }

            > div {
                > li {
                    font-size: 14px;
                    line-height: 16px;
                }
            }
        }
    }
`
