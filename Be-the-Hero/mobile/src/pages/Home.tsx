import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Title2, Container2, Wrapper, Title3, StyledText, LinkText } from '../styles/Home';

import api from '../services/api';


interface Events {
    id: number;
    name: string;
    price: number;
    ongName: string;
}

export default function Home() {
    const [events, setEvents] = useState<Events[]>([]);

    const navigation = useNavigation();

    function handleNavigateToDetails(id: number) {
        navigation.navigate("Detail", { id });
    }
    
    useEffect(() => {
        api.get('events').then(response => {
            setEvents(response.data);
        })
    }, [])

    return (
        <Container>
            <Title>Bem Vindo!</Title>

            <Title2>Escolha um dos casos abaixo e salve o dia.</Title2>
            
            {events.map(event => {
                return (
                    <Container2 key={event.id}>
                        <Wrapper>
                            <View>
                                <Title3>Caso:</Title3>
                                <StyledText>
                                    {event.name}
                                </StyledText>
                            </View>

                            <View>
                                <Title3>Ong:</Title3>
                                <StyledText>{event.ongName}</StyledText>
                            </View>
                        </Wrapper>
                        <Title3>Valor:</Title3>
                        <StyledText>R${event.price}</StyledText>

                        <TouchableOpacity style={styles.linkContainer}>
                                <LinkText onPress={() => handleNavigateToDetails(event.id)}>
                                    Ver mais detalhes
                                </LinkText>

                                <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </Container2>
                );
            })}
        </Container>
    );
}

export const styles = StyleSheet.create({
    linkContainer: {
        marginHorizontal: -25,
        marginTop: 32,
    
        borderTopColor: '#F0F0F5',
        borderTopWidth: 1,
    
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    
        paddingHorizontal: 25,
        paddingTop: 18,
    },
})