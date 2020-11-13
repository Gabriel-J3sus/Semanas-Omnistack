import React, { useEffect, useState } from 'react';
import { Text, ScrollView, View, TouchableOpacity,} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Styles from '../styles/Home';

import api from '../services/api';

interface Ongs {
    id: string;
    name: string;
    events: Array<{
        id: number;
        name: string;
        price: number;
    }>;
}

export default function Home() {
    const [ongs, setOngs] = useState<Ongs[]>([]);

    const navigation = useNavigation();

    function handleNavigateToDetails(id: number) {
        navigation.navigate("Detail", { id });
    }
    
    useEffect(() => {
        api.get('ongs').then(response => {
            setOngs(response.data);
        })
    }, [])

    return (
        <ScrollView style={Styles.container}>
            <Text style={Styles.title}>Bem Vindo!</Text>

            <Text style={Styles.title2}>Escolha um dos casos abaixo e salve o dia.</Text>
            
            {ongs.map(ong => {
                const ongId = ong.id;

                return (
                    <View key={ong.id} style={Styles.container2}>
                        <View style={Styles.wrapper}>
                            <View>
                                <Text style={Styles.title3}>Caso:</Text>
                                <Text style={Styles.text}>
                                    {ong.events.map(event => event.name)}
                                </Text>
                            </View>

                            <View>
                                <Text style={Styles.title3}>Ong:</Text>
                                <Text style={Styles.text}>{ong.name}</Text>
                            </View>
                        </View>
                        <Text style={Styles.title3}>Valor:</Text>
                        <Text style={Styles.text}>R${ong.events.map(event => event.price)}</Text>

                        <TouchableOpacity style={Styles.linkContainer}>
                            <Text 
                                style={Styles.link} 
                                onPress={() => ong.events.map(event => handleNavigateToDetails(event.id))}
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