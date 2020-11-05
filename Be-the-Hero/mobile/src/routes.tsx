import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();


import Home from './pages/Home';

import Header from './components/Header';
import Detail from './pages/Detail';


export default function Routes() {
    return(
        <NavigationContainer>
            <Navigator screenOptions={{ cardStyle: { backgroundColor: '#F0F0F5' } }}>
                <Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        header: () => <Header showArrow={false}/>
                    }}    
                />

                <Screen 
                    name="Detail" 
                    component={Detail}
                    options={{
                        headerShown: true,
                        header: () => <Header showArrow={true}/>
                    }}    
                />
            </Navigator>
        </NavigationContainer>
    );
}