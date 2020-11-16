import styled from 'styled-components';

export const Container = styled.div`
     width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Wrapper = styled.div`
    width: 100%;
    max-width: 1120px;

    height: 100%;
    max-height: 577px;

    padding: 96px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background: #F0F0F5;
    box-shadow: 0px 0px 100px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
`;

export const Left = styled.div`
    display: flex;
    flex-direction: column;

    > img {
        width: 191px;
        height: 81px;

        margin-bottom: 64px;
    }

    > h1 {
        font-weight: 500;
        font-size: 36px;
        line-height: 36px;
        color: #13131A;

        margin-bottom: 32px;
    }

    > p {
        font-weight: normal;
        font-size: 18px;
        line-height: 32px;
        color: #737380;

        margin-bottom: 84px;
    }

    > button {
        display: flex;
        align-items: center;

        font-weight: bold;
        font-size: 18px;
        line-height: 16px;
        color: #41414D;
        border: 0;
        outline: 0;

        text-decoration: none;
        transition: 0.3s ease-in-out;

        > span {
            margin-left: 28px;
        }

        &:hover {
            color: #E02041;
        }
    }
`;

export const Right = styled.form`
    display: flex;
    flex-direction: column;

    margin-left: 148px;

    > input {
        width: 448px;
        height: 60px;

        padding: 19px 20px 19px 24px;

        background: #FFFFFF;
        border: 1.5px solid #DCDCE6;
        border-radius: 8px;

        font-size: 18px;
        font-weight: normal;
        line-height: 18px;
        color: #41414D;

        &::placeholder {
            line-height: 21px;
            color: #A8A8B3;
        }   
    }

    > textarea {
        width: 448px;
        height: 175px;

        margin: 8px 0;
        padding: 19px 20px 19px 24px;

        background: #FFFFFF;
        border: 1.5px solid #DCDCE6;
        border-radius: 8px;

        font-size: 18px;
        font-weight: normal;
        line-height: 18px;
        color: #41414D; 

        &::placeholder {
            line-height: 21px;
            color: #A8A8B3;
        }
    }

    > div {
        display: flex;
        align-items: center;

        margin-top: 16px;

        > button {
            width: 100%;
            height: 60px;

            display: flex;
            justify-content: center;
            align-items: center;
            
            background: #E02041;
            border: none;
            border-radius: 8px;

            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
            color: #F0F0F5;
            cursor: pointer;

            transition: 0.3s ease-in-out;

            &:hover {
                border: 2.5px solid #E02041;
                background: transparent;
                color: #E02041;
            }
        }
    }
`;