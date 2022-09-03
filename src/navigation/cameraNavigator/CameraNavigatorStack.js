import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Camera from '../../screens/cameraContainer';

const HomeStack = createStackNavigator();

const CameraNavigator = () => {
  return (
      <HomeStack.Navigator
      screenOptions=
      {{
        headerShown: false
      }}
      >
        <HomeStack.Screen 
          name='CameraScreen'
          component={Camera}
        />
      </HomeStack.Navigator>
  );
};

export default CameraNavigator