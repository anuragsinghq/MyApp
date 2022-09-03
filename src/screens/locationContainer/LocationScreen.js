import { SafeAreaView, Text, View ,Platform, PermissionsAndroid,Alert,TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react';
import {request,check, PERMISSIONS,RESULTS, openSettings} from 'react-native-permissions';
import styles from './style';
import Header from '../../common/component/header/Header';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation'

const Location = () => {
  const [currentLongitude, setCurrentLongitude] = useState(null);
  const [currentLatitude, setCurrentLatitude] = useState(null);

  useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        getFirstLocation();
        alwaysLocation();
      } else {
        try {
          const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
            {
              title: 'Location Access Required',
              message: 'This App needs to Access your location',
            },
          );
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            //To Check, If Permission is granted
            getFirstLocation();
            alwaysLocation();
          } else {
            setLocationStatus('Permission Denied');
          }
        } catch (err) {
          console.warn(err);
        }
      }
    };
    requestLocationPermission()
  })
 

  const getFirstLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setCurrentLongitude(position.coords.longitude);
        setCurrentLatitude(position.coords.latitude);
      },
      error => {
        console.log('err', error);
      },
      {
        enableHighAccuracy: false,
        timeout: 30000,
        maximumAge: 1000,
      },
    );
  };
  const alwaysLocation = () => {
    watchID = Geolocation.watchPosition(
      position => {
        setCurrentLongitude(position.coords.longitude);
        setCurrentLatitude(position.coords.latitude);
      },
      error => {
        console.log('err', error);
      },
      {
        enableHighAccuracy: false,
        maximumAge: 1000,
      },
    );
  };
  
  return (
    <View style={styles.container}>
      <Header title='Location' />
      <SafeAreaView>
        <View>
        <View style={styles.locationnWrapper}>
          <Text style={{fontSize:18}}>Latitude : <Text style={styles.locationText}>{currentLatitude}</Text></Text>
          <Text style={{fontSize:18}}>Longitude : <Text style={styles.locationText}>{currentLongitude}</Text></Text>
        </View>
        <MapView
         showsMyLocationButton={true}
         followsUserLocation={true}
         showsCompass={true}
          style={{
            width: '100%',
            height: '85%',
          }}
          region={{
            latitude: currentLatitude? currentLatitude: 37.78825,
            longitude: currentLongitude? currentLongitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <Marker coordinate={{
             latitude: currentLatitude? currentLatitude: 37.78825,
             longitude: currentLongitude? currentLongitude: -122.4324,
             latitudeDelta: 0.015,
             longitudeDelta: 0.0121
          }} />
        </MapView>
        </View>
      </SafeAreaView>
    </View>
  )
}

export default Location

