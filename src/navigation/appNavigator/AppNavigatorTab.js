import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from '../homeNavigator';
import CameraNavigator from '../cameraNavigator';
import GetDataNavigator from '../getDataNavigator';
import StoreDataNavigator from '../storeDataNavigator';

const AppNavigatorBottomTab = createBottomTabNavigator();

const AppNavigator=()=> {
  return (
    <NavigationContainer>
        <AppNavigatorBottomTab.Navigator
          screenOptions=
          {{
            headerShown: false
          }}
        >
              <AppNavigatorBottomTab.Screen 
              name="Home" component={HomeNavigator} />
              <AppNavigatorBottomTab.Screen  
              name="Camera" component={CameraNavigator} />
               <AppNavigatorBottomTab.Screen  
              name="GetData" component={GetDataNavigator} />
               <AppNavigatorBottomTab.Screen  
              name="StoreData" component={StoreDataNavigator} />
        </AppNavigatorBottomTab.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator