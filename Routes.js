import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './views/Home'
import AddTasks from './views/AddTask'
import SavedTasks from './views/SavedTask';
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false,
                    tabBarIcon: ( {focused, size, color} ) =>{
                        if(focused){
                            return <Ionicons size={size} color={color} name='home' />
                        }

                        return <Ionicons size={size} color={color} name='home-outline' />
                    }
                }}
            />

            <Tab.Screen
                name='AddTask'
                component={AddTasks}
                options={{
                    headerShown: false,
                    tabBarIcon: ( {focused, size, color} ) =>{
                        if(focused){
                            return <Ionicons size={size} color={color} name='add-circle' />
                        }

                        return <Ionicons size={size} color={color} name='add-circle-outline' />
                    }
                }}
            />

            <Tab.Screen
                name='SavedTasks'
                component={SavedTasks}
                options={{
                    headerShown: false,
                    tabBarIcon: ( {focused, size, color} ) =>{
                        if(focused){
                            return <Ionicons size={size} color={color} name='list-circle' />
                        }

                        return <Ionicons size={size} color={color} name='list-circle-outline' />
                    }
                }}
            />
        </Tab.Navigator>
    )
}
export default Routes;