import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from '../homeNavigator';
import CameraNavigator from '../cameraNavigator';
import GetDataNavigator from '../getDataNavigator';
import StoreDataNavigator from '../storeDataNavigator';
import LocationNavigator from '../locationNavigator';

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
               options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused }) => (
                  focused ? <Icon name="home" size={20} color="#00f" /> : <Icon name="home" size={20} color="grey" />
                ),
              }}
              name="Home1" component={HomeNavigator} />
              <AppNavigatorBottomTab.Screen  
               options={{
                tabBarLabel: 'Camera',
                tabBarIcon: ({ focused }) => (
                  focused ? <Icon name="camera" size={20} color="#00f" /> : <Icon name="camera" size={20} color="grey" />
                ),
              }}
              name="Camera1" component={CameraNavigator} />
               <AppNavigatorBottomTab.Screen  
                options={{
                  tabBarLabel: 'Dowload',
                  tabBarIcon: ({ focused }) => (
                    focused ? <Icon name="cloud-download" size={20} color="#00f" /> : <Icon name="cloud-download" size={20} color="grey" />
                  ),
                }}
              name="GetData1" component={GetDataNavigator} />
               <AppNavigatorBottomTab.Screen  
                options={{
                  tabBarLabel: 'Store',
                  tabBarIcon: ({ focused }) => (
                    focused ? <Icon name="cloud-upload" size={20} color="#00f" /> : <Icon name="cloud-upload" size={20} color="grey" />
                  ),
                }}
              name="StoreData" component={StoreDataNavigator} />
              <AppNavigatorBottomTab.Screen  
                options={{
                  tabBarLabel: 'Map',
                  tabBarIcon: ({ focused }) => (
                    focused ? <Icon name="location" size={20} color="#00f" /> : <Icon name="location" size={20} color="grey" />
                  ),
                }}
              name="Map1" component={LocationNavigator} />
        </AppNavigatorBottomTab.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator