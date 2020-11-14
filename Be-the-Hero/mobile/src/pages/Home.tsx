import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View, TouchableOpacity,} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Styles from '../styles/Home';

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
        <ScrollView style={Styles.container}>
            <Text style={Styles.title}>Bem Vindo!</Text>

            <Text style={Styles.title2}>Escolha um dos casos abaixo e salve o dia.</Text>
            
            {events.map(event => {
                return (
                    <View key={event.id} style={Styles.container2}>
                        <View style={Styles.wrapper}>
                            <View>
                                <Text style={Styles.title3}>Caso:</Text>
                                <Text style={Styles.text}>
                                    {event.name}
                                </Text>
                            </View>

                            <View>
                                <Text style={Styles.title3}>Ong:</Text>
                                <Text style={Styles.text}>{event.ongName}</Text>
                            </View>
                        </View>
                        <Text style={Styles.title3}>Valor:</Text>
                        <Text style={Styles.text}>R${event.price}</Text>

                        <TouchableOpacity style={Styles.linkContainer}>
                            <Text 
                                style={Styles.link} 
                                onPress={() => handleNavigateToDetails(event.id)}
                            >
                                Ver mais detalhes
                            </Text>

                            <Feather name="arrow-right" size={16} color="#E02041"/>
                        </TouchableOpacity>
                    </View>
                );
            })}
        </ScrollView>
    );
}