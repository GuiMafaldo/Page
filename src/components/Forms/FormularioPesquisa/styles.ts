import styled from "styled-components";

export const FormSearch = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 160px auto 0;
    padding: 0 20px;

    @media (max-width: 767px) {
    }
`

export const FormContent = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-bottom: 60px;
    flex-direction: row;

    input {
        width: 150px;
        padding: 8px;
        border: 1px solid #000;
        border-radius: 8px;
    }

    button {
        border: none;
        border-radius: 8px;
        padding: 10px 20px;
        color: #fff;
        font-family: Helvetica;
        font-weight: 700;
        background-color: #669bbc;
        cursor: pointer;
        transition: background-color 0.3s ease;

        &:hover {
            background-color: #557a99;
        }
    }

    select {
        padding: 7px;
        border: 1px solid #000;
        border-radius: 8px;
        cursor: pointer;
    }

    @media (min-width: 360px) and (max-width: 767px) {
        width: 90%;
        padding: 60px 0 0 60px;
        gap: 15px;

        input {
            width: 100%;
        }

        button {
            width: 100%;
        }

        select {
            width: 100%;
        }
    
`