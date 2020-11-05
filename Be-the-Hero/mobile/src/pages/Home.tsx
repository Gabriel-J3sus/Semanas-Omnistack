import React from 'react';
import { Text, ScrollView } from 'react-native';

import Styles from '../styles/Home';

import Card from '../components/Card';

export default function Home() {
    return (
        <ScrollView style={Styles.container}>
            <Text style={Styles.title}>Bem Vindo!</Text>

            <Text style={Styles.title2}>Escolha um dos casos abaixo e salve o dia.</Text>
            
            <Card title="Cadelinha atropelada" ngo="APAD" value="120"/>
            <Card title="Cadelinha atropelada" ngo="APAD" value="120"/>
            <Card title="Cadelinha atropelada" ngo="APAD" value="120"/>
            
        </ScrollView>
    );
}