import styled from "styled-components";

export const ContainerSearchsMost = styled.div`
    background-color: #bbd0ff;
    width: 70vw;
    height: 54vh;
    margin: 0 auto;
    margin-top: 60px;
    padding: 28px 20px;
    padding-bottom: 60px;

`

export const ContentMost = styled.div`
    background-color: #fff;
    width: 68vw;
    height: 50vh;
    margin: 0 auto;
    padding: 10px;
    padding-bottom: 60px;

    > h2 {
        padding: 30px;
        font-family: Helvetica;
        font-size: 2.3em;
    }

    & .content-most {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
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
`