import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    flex: 1;
    padding: 0 24px;
    background: ${props => props.theme.colors.background};
`;

export const Title = styled.Text`
    font-family: 'Roboto_500Medium';
    font-size: 30px;
    line-height: 30px;
    color: ${props => props.theme.colors.primaryTitle};
`;

export const Title2 = styled.Text`
    font-family: 'Roboto_400Regular';
    font-size: 20px;
    line-height: 30px;
    color: ${props => props.theme.colors.primary};

    padding-top: 16px;
    padding-bottom: 32px;
    padding-right: 40px;
`;

export const Container2 = styled.View`
    height: 233px;
    padding: 25px 23px;
    margin-bottom: 16px;

    background-color: ${props => props.theme.colors.cards};
    border-radius: 8px;
`;

export const Wrapper = styled.View`
    flex-direction: row;
    justify-content: space-between;

    margin-bottom: 24px;
`;

export const Title3 = styled.Text`
    font-family: 'Roboto_700Bold';
    font-size: 14px;
    line-height: 15px;
    color: ${props => props.theme.colors.secundaryTitle};
    text-transform: uppercase;
`;

export const StyledText = styled.Text`
    margin-top: 10px;
    font-family: 'Roboto_400Regular';
    font-size: 15px;
    line-height: 25px;
    color: ${props => props.theme.colors.primary};
`;


export const LinkText = styled.Text`
    font-family: 'Roboto_700Bold';
    font-size: 15px;
    line-height: 18px;
    color: ${props => props.theme.colors.redHero};
`;