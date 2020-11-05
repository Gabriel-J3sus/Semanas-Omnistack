import React from 'react';
import { View, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import Styles from '../styles/Detail';

export default function Detail() {
    return(
        <View style={Styles.container}>
            <View style={Styles.wrapper}>
                <View style={Styles.wrapperContainer}>
                    <View>
                        <Text style={Styles.title}>Caso:</Text>
                        <Text style={Styles.text}>Cadelinha atropelada</Text>
                    </View>
                    <View>
                        <Text style={Styles.title}>Ong:</Text>
                        <Text style={Styles.text}>APAD</Text>
                    </View>
                </View>
                <Text style={Styles.title}>Descrição:</Text>
                <Text style={Styles.text}>A cadelinha Jolie foi atropelada por um carro no bairro Santana e teve que passar por uma cirurgia às pressas.</Text>

                <Text style={Styles.title}>Valor:</Text>
                <Text style={Styles.text}>R$ 120,00 reais</Text>
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