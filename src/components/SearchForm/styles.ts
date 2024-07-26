import styled from "styled-components";


export const FormSearch = styled.div`
    max-width: 1024px;
    width: 100vw;
    margin: 0 auto;
    margin-top: 30px;
`
export const FormContent = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 60px;

    input {
        width: 100px;
        padding: 8px;
        border: 1px solid #000;
        border-radius: 8px;
    }

    > button {
        border: none;
        border-radius: 8px;
        padding: 10px;
        color: #fff;
        font-family: Helvetica;
        font-weight: 700;
        background-color: #0d6efd; 
    }

     select {
        padding: 7px;
        border: 1px solid #000;
        border-radius: 8px;
     }
`