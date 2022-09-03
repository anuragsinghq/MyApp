import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import StoreData from '../../screens/storeDataContainer';

const StoreDataStack = createStackNavigator();

const StoreDataNavigator = () => {
  return (
      <StoreDataStack.Navigator
      screenOptions=
          {{
            headerShown: false
          }}
      >
        <StoreDataStack.Screen 
          name='StoreDataScreen'
          component={StoreData}
        />
      </StoreDataStack.Navigator>
  );
};

export default StoreDataNavigator