import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        paddingHorizontal: 24,
    },
    
    wrapper: {
        height: 288,
        marginBottom: 16,
        paddingHorizontal: 24,
        paddingTop: 24,

        backgroundColor: '#FFFFFF',
        borderRadius: 8,
    },

    wrapperContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
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
        marginBottom: 24,

        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
        lineHeight: 25,
        color: '#737380',
    },

    secondWrapper: {
        height: 210,
        padding: 24,
        
        borderRadius: 8,
        backgroundColor: '#FFFFFF',

    },

    title2: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 20,
        lineHeight: 30,
        color: '#13131A',
    },

    text2: {
        marginVertical: 16,

        fontFamily: 'Roboto_400Regular',
        fontSize: 15,
        lineHeight: 20,
        color: '#737380',
    },

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
})