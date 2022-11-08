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
    textInput:{
        width:'80%',
        height:48,
        backgroundColor:'white',
        borderRadius:5,
        paddingLeft:10,
        marginBottom:20
    },
    inputLabel:{
        color:'white',
        fontSize:16,
        marginBottom:4,
        fontWeight:'bold'
    },
    orderButton:{
        marginTop:20,
        flex:1,
        borderRadius:8
    }

});