import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


interface CardProps {
    title: string;
    ngo: string;
    value: string;
}

export default function Card({ title , ngo, value }: CardProps) {
    const navigation = useNavigation();

    function handleNavigateToDetail() {
        navigation.navigate("Detail")
    }

    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <View>
                    <Text style={styles.title}>Caso:</Text>
                    <Text style={styles.text}>{title}</Text>
                </View>

                <View>
                    <Text style={styles.title}>Ong:</Text>
                    <Text style={styles.text}>{ngo}</Text>
                </View>
            </View>
            <Text style={styles.title}>Valor:</Text>
            <Text style={styles.text}>R${value}</Text>

            <TouchableOpacity style={styles.linkContainer}>
                <Text style={styles.link} onPress={handleNavigateToDetail}>Ver mais detalhes</Text>

                <Feather name="arrow-right" size={16} color="#E02041"/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 233,
        paddingHorizontal: 23,
        paddingVertical: 25,
        marginBottom: 16,

        backgroundColor: '#FFFFFF',
        borderRadius: 8
    },

    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginBottom: 24,
    },

    title: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 14,
        lineHeight: 15,
        color: '#41414D',
        textTransform: 'uppercase',
    },

    text: {
        marginTop: 10,
        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
        lineHeight: 25,
        color: '#737380',
    },

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

    link: {
        fontFamily: 'Roboto_700Bold',
        fontSize: 15,
        lineHeight: 18,
        color: '#E02041',
    }
})