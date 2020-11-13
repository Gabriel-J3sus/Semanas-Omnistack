import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
    },

    title: {
        fontFamily: 'Roboto_500Medium',
        fontSize: 30,
        lineHeight: 30,
        color: '#13131A',
    },

    title2: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 20,
        lineHeight: 30,
        color: '#737380',

        paddingTop: 16,
        paddingBottom: 32,
        paddingRight: 40,
    },

    container2: {
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

    title3: {
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
});