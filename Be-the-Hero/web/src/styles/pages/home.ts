import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    max-width: 1180px;

    padding: 0 30px;
    margin: 32px auto;

    > h1 {
        margin-top: 80px;
        margin-bottom: 24px;

        font-weight: 500;
        font-size: 36px;
        line-height: 36px;
        color: ${props => props.theme.colors.primaryTitle};
    }

    > ul {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 24px;
        list-style: none;

        > li {
            background: ${props => props.theme.colors.cards};
            padding: 24px;
            border-radius: 8px;
            position: relative;

            > button {
                position: absolute;
                right: 24px;
                top: 24px;

                background: transparent;
                cursor:pointer; 
                border: 0;
                outline: 0;
            }

            > strong {
                font-weight: bold;
                font-size: 14px;
                line-height: 14px;
                text-transform: uppercase;
                color: ${props => props.theme.colors.secondaryTitle};
            }

            > p {
                font-weight: normal;
                font-size: 18px;
                line-height: 24px;
                color: ${props => props.theme.colors.primary};

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
        color: ${props => props.theme.colors.primaryTitle};
    }
`;

export const Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    > .switch {
        transform: rotate(-90deg);
    }

    > .new {
        width: 262px;
        height: 60px;

        margin-right: 24px;
        margin-left: 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: ${props => props.theme.colors.redHero};
        border-radius: 8px;

        font-weight: bold;
        font-size: 18px;
        line-height: 18px;
        color: #F0F0F5;

        text-decoration: none;

        transition: 0.3s ease-in-out;

        &:hover {
            border: 1.5px solid ${props => props.theme.colors.redHero};
            color: ${props => props.theme.colors.redHero};
            background: transparent;
        }
    }

    > button {
        width: 60px;
        height: 60px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: 1.5px solid ${props => props.theme.colors.cancel};
        border-radius: 8px;
        background: transparent;

        transition: 0.3s ease-in-out;

        &:hover {
            border: 1.5px solid ${props => props.theme.colors.redHero};
        }
    }
`;