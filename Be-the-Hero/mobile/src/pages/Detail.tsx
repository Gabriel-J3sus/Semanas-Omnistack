import React, { useEffect, useState } from 'react';
import { View, Linking, StyleSheet, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useRoute } from'@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';

import { Container, Wrapper, WrapperContainer, Title, Text1, SecondWrapper, Title2, Text2} from '../styles/Detail';

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
        <Container>
            <Wrapper>
                <WrapperContainer>
                    <View>
                        <Title>Caso:</Title>
                        <Text1>{event.name}</Text1>
                    </View>
                    <View>
                        <Title>Ong:</Title>
                        <Text1>{event.ongName}</Text1>
                    </View>
                </WrapperContainer>

                <Title>Descrição:</Title>
                <Text1>{event.description}</Text1>

                <Title>Valor:</Title>
                <Text1>R$ {event.price} reais</Text1>
            </Wrapper>

            <SecondWrapper>
                <Title2> Salve o dia!</Title2><Title2> Seja o herói desse caso. </Title2>
                <Text2> Entre em contato: </Text2>

                <View style={styles.buttons}>
                    <RectButton style={styles.button} onPress={sendWhatsapp}> 
                        <Text style={styles.buttonText}> WhatsApp </Text>
                    </RectButton>

                    <RectButton style={styles.button} onPress={() => sendMail(event.ongEmail)}>
                        <Text style={styles.buttonText}> E-mail </Text>
                    </RectButton>
                </View>
            </SecondWrapper>
        </Container>
    );
}

const styles = StyleSheet.create({
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    button: {
        width: 125,
        height: 50,
        
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: '#E02041',
        borderRadius: 8,
    },

    buttonText: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
        color: '#F0F0F5',
    }
});