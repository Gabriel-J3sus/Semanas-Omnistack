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

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Left =  styled.div`
    display: flex;
    flex-direction: column;

    > img {
        width: 250px;
        height: 106px;
    }

    > form {
        margin-top: 100px;

        display: flex;
        flex-direction: column;

        border: 0;

        > legend {
            margin-bottom: 32px;

            font-size: 36px;
            font-weight: 500;
            line-height: 36px;
            color: #13131A;
        }

        > input {
            width: 351px;
            height: 60px;

            padding: 19px 20px 19px 24px;

            background: #FFF;
            border: 1.5px solid #DCDCE6;
            border-radius: 8px;

            font-size: 18px;
            font-weight: normal;
            line-height: 18px;
            color: #41414D;

            &::placeholder {
                font-size: 18px;
                font-weight: normal;
                line-height: 21px;
                color: #A8A8B3;
            }
        }

        > button {
            width: 351px;
            height: 60px;

            margin-top: 16px;
            margin-bottom: 40px;

            display: flex;
            justify-content: center;
            align-items: center;

            background: #E02041;
            border-radius: 8px;
            border: 0;

            font-weight: bold;
            font-size: 18px;
            line-height: 21px;
            color: #F0F0F5;
            cursor: pointer;

            text-decoration: none;
            transition: 0.3s ease-in-out;

            &:hover {
                background: transparent;
                color: #E02041;
                border: 2px solid #E02041;
            }
        }

        > .return {
            display: flex;
            align-items: center;
            
            font-size: 18px;
            font-weight: bold;
            line-height: 21px;
            color: #41414D;
            
            text-decoration: none;
            transition: 0.3s ease-in-out;

            > span {
                margin-left: 20px;
            }

            &:hover {
                color: #E02041;
            }
        }
    }
`;