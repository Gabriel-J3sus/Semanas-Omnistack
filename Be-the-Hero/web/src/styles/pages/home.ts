import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    max-width: 1180px;

    padding: 0 30px;
    margin: 32px auto;

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: #DCDCE6;
        border-radius: 2px;
    }

    &::-webkit-scrollbar-track {
        background-color: #F0F0F5;
    }

    > h1 {
        margin-top: 80px;
        margin-bottom: 24px;

        font-weight: 500;
        font-size: 36px;
        line-height: 36px;
        color: #13131A;
    }

    > ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
        list-style: none;

        > li {
            background: #FFF;
            padding: 24px;
            border-radius: 8px;
            position: relative;

            > button {
                position: absolute;
                right: 24px;
                top: 24px;

                background: #FFF;
                cursor:pointer; 
                border: 0;
                outline: 0;
            }

            > strong {
                font-weight: bold;
                font-size: 14px;
                line-height: 14px;
                text-transform: uppercase;
                color: #41414D;
            }

            > p {
                font-weight: normal;
                font-size: 18px;
                line-height: 24px;
                color: #737380;

                margin-top: 16px;
                margin-bottom: 32px;

                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
    }
`;

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Left = styled.div`
    display: flex;
    align-items: center;

    > img {
        height: 64px;

        margin-right: 24px;
    }

    > h2 {
        font-weight: normal;
        font-size: 20px;
        line-height: 18px;
        color: #13131A;
    }
`;

export const Right = styled.div`

    display: flex;
    align-items: center;

    > .new {
        width: 262px;
        height: 60px;

        margin-right: 24px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: #E02041;
        border-radius: 8px;

        font-weight: bold;
        font-size: 18px;
        line-height: 18px;
        color: #F0F0F5;

        text-decoration: none;

        transition: 0.3s ease-in-out;

        &:hover {
            border: 1.5px solid #E02041;
            color: #E02041;
            background: transparent;
        }
    }

    > button {
        width: 60px;
        height: 60px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1.5px solid #DCDCE6;
        border-radius: 8px;

        transition: 0.3s ease-in-out;

        &:hover {
            border: 1.5px solid #E02041;
        }
    }
`;