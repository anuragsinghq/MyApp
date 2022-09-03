import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
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
          name='HomeScreen'
          component={Home}
        />
      </HomeStack.Navigator>
  );
};

export default HomeNavigator