import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity, Modal, Image} from 'react-native';
import useStorage from '../hooks/useStorage';

const AddTasks = () => {

    const { saveItem } = useStorage();
    
    const [valorInput, setValorInput] = useState('')
    const [modalVisible, setModalVisible] = useState(false)


    const handleInputChange = (texto) => {
        setValorInput(texto)
    };

    async function handleSubmit(){
        console.log(valorInput)

        await saveItem("@task", valorInput)
        setModalVisible(true)
        setValorInput('')
    }

    const fecharModal = () => {
        setModalVisible(false);
    }

    return(

        
<View>
        <View style={styles.header}>
            <Text style={styles.headerText}>Adicionar Tarefas</Text>
        </View>        

        <View style={styles.inputArea}>
            <View style={styles.inputArea}>

                <TextInput style={styles.input} value={valorInput} placeholder='Adicionar Tarefa' onChangeText={handleInputChange}/>

            <TouchableOpacity style={styles.btnInput} onPress={handleSubmit}>
                <Text style={styles.btnText}>Adicionar Tarefa</Text>
            </TouchableOpacity>

            <Modal  animationType='fade'
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={fecharModal}>
                    <View style={styles.modal}>
                    <Text style={styles.modalText}>Tarefa adicionada
                    com sucesso!</Text>
                    <Image source={require('../assets/circle-check-solid 1.svg')} style={styles.imagem}/>
                    <TouchableOpacity  style={styles.modalVoltar} onPress={fecharModal}>
                        <Text style={styles.modalVoltarText}>Fechar</Text>
                    </TouchableOpacity>
                    </View>
            </Modal>
            </View>
        </View>
</View>




 
)
}
export default AddTasks;

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#5A5590',
    },
    headerText:{
        padding: 20,
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    inputArea:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        position: 'relative',
        top: '50%'
    },
    input:{
        width: 315,
        padding: 20,
        fontSize: 20,
        borderRadius: 10,
        backgroundColor: '#ccc'
    },
    btnInput:{
        marginTop: 20,
        width: 315,
        height: 59,
        backgroundColor: '#5A5590',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    btnText:{
        fontSize: 32,
        fontWeight: 'bold',
        color: '#fff'
    },
    modal:{
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'relative',
        top: '30%',
        backgroundColor: '#5A5590',
        width: '100%',
        height: 300
    },  
    modalText:{
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 20,
        color: '#fff'
    },
    imagem:{
        width: 64,
        height: 64,
        margin: 20
    },
    modalVoltar:{
        width: 300,
        height: 59,
        backgroundColor: '#fff',
        color:'#5A5590',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalVoltarText:{
        color: '#5A5590',
        fontSize: 32,
        fontWeight: 'bold'
    }
})