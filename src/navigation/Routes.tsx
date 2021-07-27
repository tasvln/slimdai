import React from 'react'
import { StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home, Discover, Notifications, Profile } from '../screens'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Feather } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function tabBar() {
    return (
        <Tab.Navigator
            screenOptions={({ route }: any) => ({
                tabBarIcon: ({ focused, color, size }: any) => {
                    let iconName: any

                    if (route.name === 'Home') { iconName = focused ? 'hexagon' : 'hexagon' } 
                    else if (route.name === 'Discover') { iconName = focused ? 'search' : 'search' }
                    else if (route.name === 'Notifications') { iconName = focused ? 'zap' : 'zap' }
                    else if (route.name === 'Profile') { iconName = focused ? 'smile' : 'smile' }

                    // You can return any component that you like here!
                    return <Feather name={iconName} size={32} color={color} />;
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: '#ffffff40',
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#141414',
                    height: 100,
                    borderTopWidth: 0,
                }
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Discover" component={Discover} />
            <Tab.Screen name="Notifications" component={Notifications} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
    )
}

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Main" component={tabBar} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
