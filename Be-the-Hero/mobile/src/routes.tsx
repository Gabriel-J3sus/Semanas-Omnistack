import React, { useCallback, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { NavigationContainer,  } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import { light } from './styles/themes/light';
import { dark } from './styles/themes/dark';

import Home from './pages/Home';

import Header from './components/Header';
import Detail from './pages/Detail';


export default function Routes() {
    const [theme, setTheme] = useState(light);
    
    const toggleTheme = useCallback(
        () => {
            setTheme(theme.title === 'light' ? dark : light);
        }, [setTheme, theme.title]
    )

    return(
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Navigator screenOptions={{ cardStyle: { backgroundColor: '#F0F0F5' } }}>
                    <Screen 
                        name="Home" 
                        children={() => <Home toggleTheme={toggleTheme}/>}
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
        </ThemeProvider>
    );
}