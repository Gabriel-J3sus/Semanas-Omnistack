import React, { useContext, useEffect, useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Switch } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from 'styled-components';

import { Container, Title, Title2, Container2, Wrapper, Title3, StyledText, LinkText } from '../styles/Home';

import api from '../services/api';

interface Props {
    toggleTheme(): void;
}

interface Events {
    id: number;
    name: string;
    price: number;
    ongName: string;
}

export default function Home({ toggleTheme }: Props) {
    const { title } = useContext(ThemeContext);
    
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
            <View style={styles.switchContainer}>
                <Title>Bem Vindo!</Title>
                <Switch 
                    trackColor={{ false: '#737380', true: "#FFFFFF" }}
                    thumbColor={title === 'dark' ? "#5c5c61" : "#B9B9B9"}
                    onValueChange={toggleTheme}
                    value={title === 'dark'}
                />
            </View>

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
    
        borderTopColor: '#d8d8db',
        borderTopWidth: 1,
    
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    
        paddingHorizontal: 25,
        paddingTop: 18,
    },

    switchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})