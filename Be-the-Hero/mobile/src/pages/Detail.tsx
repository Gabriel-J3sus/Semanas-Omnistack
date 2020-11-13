import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useRoute } from'@react-navigation/native';

import Styles from '../styles/Detail';

import api from '../services/api';


interface EventDetailsRouteParams {
    id: string;
}

interface Event {
    id: number;
    name: string;
    description: string;
    price: number;
    ong: Array<{
        id: string;
        name: string;
        email: string;
        whatsapp: string;
    }>;
}

export default function Detail() {
    const route = useRoute();

    const params = route.params as EventDetailsRouteParams;

    const [event, setEvent] = useState<Event>();
    useEffect(() => {
        api.get(`events/${params.id}`).then(response => {
            setEvent(response.data);
        })
    }, [params.id])
    
    if (!event) {
        return <Text>Carregando...</Text>;
    }

    return(
        <View style={Styles.container}>
            <View style={Styles.wrapper}>
                <View style={Styles.wrapperContainer}>
                    <View>
                        <Text style={Styles.title}>Caso:</Text>
                        <Text style={Styles.text}>{event.name}</Text>
                    </View>
                    <View>
                        <Text style={Styles.title}>Ong:</Text>
                        <Text style={Styles.text}>wwww</Text>
                    </View>
                </View>
                <Text style={Styles.title}>Descrição:</Text>
                <Text style={Styles.text}>{event.description}</Text>

                <Text style={Styles.title}>Valor:</Text>
                <Text style={Styles.text}>R$ {event.price} reais</Text>
            </View>

            <View style={Styles.secondWrapper}>
                <Text style={Styles.title2}> Salve o dia!</Text><Text style={Styles.title2}> Seja o herói desse caso. </Text>
                <Text style={Styles.text2}> Entre em contato: </Text>

                <View style={Styles.buttons}>
                    <RectButton style={Styles.button} onPress={() => {}}> 
                        <Text style={Styles.buttonText}> WhatsApp </Text>
                    </RectButton>

                    <RectButton style={Styles.button} onPress={() => {}}>
                        <Text style={Styles.buttonText}> E-mail </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}