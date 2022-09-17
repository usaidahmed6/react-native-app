import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../screen/Home';
import LiveTV from '../screen/LiveTV';
import Videos from '../screen/Videos';

const Tab = createBottomTabNavigator();

function BottomNavigation() {


    return (
        <Tab.Navigator
            initialRouteName="Home"
            tabBarColor= 'red'
            screenOptions={{
                tabBarActiveTintColor: '#e91e63',
                headerShown: false ,
                tabBarStyle: { backgroundColor: 'coral' },
            }}

        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="LiveTV"
                component={LiveTV}
                options={{
                    tabBarLabel: 'Updates',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Videos}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
export default BottomNavigation;





