import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            background: string;
            redHero: string;
            
            primaryTitle: string;
            secundaryTitle: string;
    
            primary: string;
            secundary: string;
    
            cards: string;
            inputs: string;
            cancel: string;
            wrapper: string;
        }
    }
}