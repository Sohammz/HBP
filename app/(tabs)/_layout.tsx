import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { isNewBackTitleImplementation } from 'react-native-screens'
import Colors from '@/constants/Colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'



const _layout = () => {
  return (
    
  
    
    
    <Tabs screenOptions={{
        tabBarActiveTintColor: Colors.red,
        tabBarLabelStyle:{
            fontFamily : 'mon-sb',
        },
       
    }}>
          
     <Tabs.Screen name="index" options={{
        tabBarLabel : 'Home',
        tabBarIcon : ({ color,size}) =>
        <MaterialCommunityIcons name="home" size={28} color="black" />,
       
    }}    ></Tabs.Screen>
    <Tabs.Screen name="inbox" options={{
        tabBarLabel : 'Nutrition',
        headerShown :false,
        tabBarIcon : ({ color,size}) =>
        <MaterialCommunityIcons name="food" size={28} color="black" />
       
    }}    ></Tabs.Screen>
    <Tabs.Screen name="explore" options={{
        tabBarLabel : 'Workout',
        headerShown :false,
        tabBarIcon : ({ color,size}) =>
        <MaterialCommunityIcons name="human-handsdown" size={28} color="black" />

    }}    ></Tabs.Screen>
    <Tabs.Screen name="profile" options={{
        tabBarLabel : 'Recipe',
        headerShown :false,
        tabBarIcon : ({ color,size}) =>
        <MaterialCommunityIcons name="bowl-mix" size={28} color="black" />

    }}    ></Tabs.Screen>
    <Tabs.Screen name="wishlist" options={{
        tabBarLabel : 'Profile',
        headerShown :false,
        tabBarIcon : ({ color,size}) =>
        <MaterialCommunityIcons name="account" size={28} color="black" />

    }}    ></Tabs.Screen>
  
    </Tabs>
  
  )
}

export default _layout