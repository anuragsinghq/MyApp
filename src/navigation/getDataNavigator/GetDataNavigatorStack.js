import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import GetData from '../../screens/getDataContainer';

const GetDataStack = createStackNavigator();

const GetDataNavigator = () => {
  return (
      <GetDataStack.Navigator
      screenOptions=
          {{
            headerShown: false
          }}
      >
        <GetDataStack.Screen 
          name='GetDataScreen'
          component={GetData}
        />
      </GetDataStack.Navigator>
  );
};

export default GetDataNavigator