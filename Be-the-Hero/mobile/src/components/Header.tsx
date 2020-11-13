import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Logo from '../images/Logo.png';

import api from '../services/api';

interface HeaderProps {
    showArrow?: boolean;
}

interface Ongs {
    id: string;
}

export default function Header({ showArrow }: HeaderProps) {
    const navigation = useNavigation();

    const [ongs, setOngs] = useState<Ongs[]>([])

    function handleNavigateReturn() {
        navigation.navigate("Home");
    }

    useEffect(() => {
        api.get('ongs').then(response => {
            setOngs(response.data);
        })
    }, [])

    return(
        <View style={styles.container}>
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
                <Text style={styles.title}> Total de<Text style={styles.titleBold}> {ongs.length} casos </Text></Text>
            )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        paddingTop: 40,
        paddingBottom: 45,
        backgroundColor: '#F0F0F5',

        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    title: {
        fontFamily: 'Roboto_400Regular',
    },

    titleBold: {
        fontFamily: 'Roboto_500Medium',
    }
})