import React, { useEffect, useState } from 'react';
import { View, Text, Linking } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useRoute } from'@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

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
    ongName: string;
    ongEmail: string;
    ongWhatsapp: string;
}

export default function Detail() {
    const route = useRoute();
    const params = route.params as EventDetailsRouteParams;

    const [event, setEvent] = useState<Event>();

    const message = `Olá ${event?.ongName}, estou entrando em contato pois gostaria de ajudar no caso "${event?.name}" com o valor de ${event?.price}`;

    useEffect(() => {
        api.get(`events/${params.id}`).then(response => {
            setEvent(response.data);
        })
    }, [params.id])
    
    if (!event) {
        return <Text>Carregando...</Text>;
    }

    function sendMail(email: string) {
        MailComposer.composeAsync({
            subject: `Herói do caso: ${event?.name}`,
            recipients: [email],
            body: message,
        })
    }

    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=${event?.ongWhatsapp}&text=${message}`);
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
                        <Text style={Styles.text}>{event.ongName}</Text>
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
                    <RectButton style={Styles.button} onPress={sendWhatsapp}> 
                        <Text style={Styles.buttonText}> WhatsApp </Text>
                    </RectButton>

                    <RectButton style={Styles.button} onPress={() => sendMail(event.ongEmail)}>
                        <Text style={Styles.buttonText}> E-mail </Text>
                    </RectButton>
                </View>
            </View>
        </View>
    );
}