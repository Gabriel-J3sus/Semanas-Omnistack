import styled from 'styled-components/native';

export const Container = styled.View`
    height: 100%;
    padding: 0 24px;
    background: ${props => props.theme.colors.background};
`;

export const Wrapper = styled.View`
    height: 288px;
    margin-bottom: 16px;
    padding: 24px 24px 0;

    background-color: ${props => props.theme.colors.cards};
    border-radius: 8px;
`;

export const WrapperContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: 'Roboto_700Bold';
    font-size: 14px;
    line-height: 15px;
    color: ${props => props.theme.colors.secundaryTitle};
    text-transform: uppercase;
`;

export const Text1 = styled.Text`
    margin: 10px 0 24px;

    font-family: 'Roboto_400Regular';
    font-size: 15px;
    line-height: 25px;
    color: ${props => props.theme.colors.primary};
`;

export const SecondWrapper = styled.View`
    height: 210px;
    padding: 24px;
        
    border-radius: 8px;
    background-color: ${props => props.theme.colors.cards};
`;

export const Title2 = styled.Text`
    font-family: 'Roboto_500Medium';
    font-size: 20px;
    line-height: 30px;
    color: ${props => props.theme.colors.primaryTitle};
`;

export const Text2 = styled.Text`
    margin: 16px 0;

    font-family: 'Roboto_400Regular';
    font-size: 15px;
    line-height: 20px;
    color: ${props => props.theme.colors.primary};
`;