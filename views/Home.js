import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';

export default function Home({}){

    return(
        
        <View style={styles.container}>
                  
            <Image source={require('../assets/undraw_mobile_application_re_13u3.svg')} style={styles.imagem}/>

            <Text style={styles.titulo}>Bem-vindo ao <br/> Listator</Text>

            <Text style={styles.paragrafo}>Crie, priorize e acompanhe suas <br/> tarefas com facilidade.</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ccc",
        justifyContent:'center'
    },
    imagem: {
        width: 327,
        height: 368,
        resizeMode: 'cover',
        alignSelf: 'center',
        marginTop: 20,
    },
    titulo: {
        textAlign: 'center',
        marginTop: 30,
        fontSize: 32,
        color: '#5A5590',
        fontWeight: 'bold'
    },
    paragrafo:{
        textAlign: 'center',
        fontSize: 20,
        color: '#5A5590',
        marginTop: 30,
        marginBottom: 30
    },
    btn: {
        width: 300,
        height: 59,
        backgroundColor: '#5A5590',
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderRadius: 10
    },
    btnText: {
        color: '#FFF',
        fontSize: 36,
        fontWeight: 'bold'
    }


})