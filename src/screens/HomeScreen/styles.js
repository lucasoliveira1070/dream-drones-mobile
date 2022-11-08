import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#1B2430',
        padding: 8,
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: '10%'
    },
    listOrders: {
        flex: 1,
        width: '100%'
    },
    conditionalView: {
        backgroundColor: 'grey',
        borderRadius: 10,
        alignItems: 'center',
        padding: 15,
        margin: 8

    },
    conditionalTitle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: '10%',
        textAlign:'center'
    }

});