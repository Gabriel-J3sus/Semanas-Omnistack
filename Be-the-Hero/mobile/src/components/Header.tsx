import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';

import Logo from '../images/Logo.png';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
    showArrow?: boolean;
}

export default function Header({ showArrow }: HeaderProps) {
    const navigation = useNavigation();

    function handleNavigateReturn() {
        navigation.navigate("Home");
    }
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
                <Text style={styles.title}> Total de<Text style={styles.titleBold}> 43 casos </Text></Text>
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