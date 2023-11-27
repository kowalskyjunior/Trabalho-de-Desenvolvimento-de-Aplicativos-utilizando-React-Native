import { useState, useEffect } from 'react'
import React from 'react'
import { View, Text, FlatList, StyleSheet} from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import useStorage from '../hooks/useStorage'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TaskItem } from '../components/taskItem'

export function SavedTasks (){
    const [listTasks, setListTasks] = useState([])
    const focused = useIsFocused();
    const { getItem, removeItem } = useStorage();

    useEffect(() => {
        async function loadTasks(){
            const tasks = await getItem('@task')
            setListTasks(tasks);
        }

        loadTasks();
    }, [focused])

    async function handleDeleteTask(item){
        const tasks = await removeItem('@task', item)
        setListTasks(tasks)
    }

    return(
        <SafeAreaView style={{flex:1}}>
        <View style={styles.header}>
            <Text style={styles.headerText}>
                Lista de Tarefas
            </Text>
        </View>

        <View style={styles.tarefaSalva}>
            <Text style={styles.tarefaSalvaText}>
                Tarefas Salvas
            </Text>
        </View>

        <View style={styles.taskSaved}>
            {listTasks.length > 0 ? (  
            <FlatList
            style={styles.taskSavedWraper}
            data={listTasks}
            keyExtractor={(item) => String(item)}
            renderItem={ ({ item }) => <TaskItem data={item} removeTask={() => handleDeleteTask(item)}/>}
            />
            ) : (
                <Text style={styles.NoTask}>Não há tarefas no<br/>momento</Text>
            )}
        </View>
        </SafeAreaView>


    )
}

const styles = StyleSheet.create({
    header:{
        backgroundColor: '#5A5590'
    },
    headerText:{
        padding: 20,
        fontSize: 32,
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    taskSavedWraper:{
        flex: 1,
        padding: 20,
        backgroundColor: '#ccc',
    },
    tarefaSalvaText:{
        flex: 1,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
        color: '#5A5590'
    },
    NoTask:{
        textAlign: 'center',
        fontSize: 18,
        color: '#555',
        position: 'relative',
        top: 180,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 32
    }
})

export default SavedTasks;

