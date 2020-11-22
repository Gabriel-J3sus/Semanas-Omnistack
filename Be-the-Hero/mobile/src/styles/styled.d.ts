import 'styled-components/native';

declare module 'styled-components/native' {
    export interface DefaultTheme {
        title: string;

        colors: {
            background: string;
            redHero: string;
            
            primaryTitle: string;
            secundaryTitle
    
            primary: string;
    
            cards: string;
        }
    }
}