import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Camera from '../../screens/cameraContainer';

const CameraStack = createStackNavigator();

const CameraNavigator = () => {
  return (
      <CameraStack.Navigator
      screenOptions=
      {{
        headerShown: false
      }}
      >
        <CameraStack.Screen 
          name='CameraScreen'
          component={Camera}
        />
      </CameraStack.Navigator>
  );
};

export default CameraNavigator