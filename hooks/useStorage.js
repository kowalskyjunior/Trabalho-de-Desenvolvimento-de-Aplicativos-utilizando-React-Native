import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {
    const getItem = async (key) => {
        try{
            const tasks = await AsyncStorage.getItem(key);
            return JSON.parse(tasks) || [];
        } catch(error){
            console.log(error)
            return [];
        }
    }

    const saveItem = async (key, value) => {
        try{
            let tasks = await getItem(key)

            tasks.push(value)

            await AsyncStorage.setItem(key, JSON.stringify(tasks))
        } catch(error){
            console.log(error)
        }
    }

    const removeItem = async (key, item) => {
        try{
            let tasks = await getItem(key);

            let myTasks = tasks.filter((tasks) =>{
                return (tasks != item)
            })

            await AsyncStorage.setItem(key, JSON.stringify(myTasks))
            return myTasks;
        }catch(error){
            console.log(error)
        }
    }

    return{
        getItem,
        saveItem,
        removeItem,
    }
}

export default useStorage;