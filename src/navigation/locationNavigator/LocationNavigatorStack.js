import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LocationScreen from '../../screens/locationContainer';

const LocationStack = createStackNavigator();

const LocationNavigator = () => {
  return (
      <LocationStack.Navigator
      screenOptions=
          {{
            headerShown: false
          }}
      >
        <LocationStack.Screen 
          name='LocationScreen'
          component={LocationScreen}
        />
      </LocationStack.Navigator>
  );
};

export default LocationNavigator