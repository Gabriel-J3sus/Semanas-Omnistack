import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import Logo from '../images/Logo.png';

import api from '../services/api';

interface HeaderProps {
    showArrow?: boolean;
}

interface Events {
    id: number;
}

export default function Header({ showArrow }: HeaderProps) {
    const navigation = useNavigation();

    const [events, setEvents] = useState<Events[]>([])

    function handleNavigateReturn() {
        navigation.navigate("Home");
    }

    useEffect(() => {
        api.get('events').then(response => {
            setEvents(response.data);
        })
    }, [])

    return(
        <Container>
            <Image source={Logo} />

            { showArrow ? (
                <BorderlessButton onPress={handleNavigateReturn}>
                    <Feather 
                        name="arrow-left" 
                        size={32} 
                        color="#E02041" 
                    />
                </BorderlessButton>
            ) : (
                <Title> Total de<TitleBold> {events.length} casos </TitleBold></Title>
            )
            }
        </Container>
    );
}

const Container = styled.View`
    padding: 40px 40px 45px;

    background-color: #F0F0F5;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;    

const Title = styled.Text`
    font-family: 'Roboto_400Regular';
`;

const TitleBold = styled.Text`
    font-family: 'Roboto_500Medium';
`;