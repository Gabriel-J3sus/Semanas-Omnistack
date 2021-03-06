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

    background: ${props => props.theme.colors.wrapper};
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
        font-size: 36px;
        font-weight: 500;
        line-height: 36px;
        color: ${props => props.theme.colors.primaryTitle};
    }

    > p {
        width: 384px;

        margin-top: 32px;
        margin-bottom: 84px;

        font-size: 18px;
        font-weight: normal;
        line-height: 32px;
    } 

    > button {
        display: flex;
        align-items: center;

        font-size: 18px;
        font-weight: bold;
        line-height: 16px;
        background: transparent;
        color: ${props => props.theme.colors.secundaryTitle};
        outline: 0;
        border: 0;

        text-decoration: none;
        transition: 0.3s ease-in-out;

        > span {
            margin-left: 28px;
        }

        &:hover {
            color: ${props => props.theme.colors.redHero};
        }
    }
`;

export const Right = styled.form`
    display: flex;
    flex-direction: column;

    margin-left: 120px;

    > input {
        width: 448px;
        height: 60px;

        padding: 19px 20px 19px 24px;

        background: ${props => props.theme.colors.inputs};
        border: 1.5px solid ${props => props.theme.colors.cancel};
        border-radius: 8px;
        
        font-size: 18px;
        font-weight: normal;
        line-height: 18px;
        color: ${props => props.theme.colors.secundaryTitle};

        &::placeholder {
            line-height: 21px;
            color: ${props => props.theme.colors.secundary};
        }

        &:not(:first-child):not(:last-child) {
            margin-top: 8px;
        }
    }

    > .input-wrapper {
        margin: 8px 0 16px;

        display: flex;

        > input {
            width: 448px;
            height: 60px;

            padding: 19px 20px 19px 24px;

            background: ${props => props.theme.colors.inputs};
            border: 1.5px solid ${props => props.theme.colors.cancel};
            border-radius: 8px;
            
            font-size: 18px;
            font-weight: normal;
            line-height: 18px;
            color: ${props => props.theme.colors.secundaryTitle};
            
            &:first-child {
                margin-right: 8px;
            }

            &::placeholder {
                line-height: 21px;
                color: ${props => props.theme.colors.secundary};
            } 
        }
    }

    > button {
        width: 448px;
        height: 60px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: ${props => props.theme.colors.redHero};
        border: 0;
        border-radius: 8px;

        font-weight: bold;
        font-size: 18px;
        line-height: 21px;
        color: #F0F0F5;
        cursor: pointer;

        transition: 0.3s ease-in-out;

        &:hover {
            background: transparent;
            color: ${props => props.theme.colors.redHero};
            border: 2px solid ${props => props.theme.colors.redHero};
        }
    }
`;