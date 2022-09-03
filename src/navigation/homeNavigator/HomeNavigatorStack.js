import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../../screens/homeContainer';

const HomeStack = createStackNavigator();

const HomeNavigator = () => {
  return (
      <HomeStack.Navigator
      screenOptions=
          {{
            headerShown: false
          }}
      >
        <HomeStack.Screen 
         options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ focused }) => (
            focused ? <Icon name="home" size={20} color="#00f" /> : <Icon name="home" size={20} color="grey" />
          ),
        }}
          name='Home'
          component={Home}
        />
      </HomeStack.Navigator>
  );
};

export default HomeNavigator