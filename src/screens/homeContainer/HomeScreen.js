import React from 'react';
import { SafeAreaView, View, StyleSheet,ImageBackground,Dimensions } from 'react-native'
import ImagesSwiper from "react-native-image-swiper";
import Header from '../../common/component/header/Header';
import styles from './style';

const customImg = [
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/aster.jpg?alt=media&token=166e66b0-9c8e-4803-918e-25762c58dbda",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/fan.jpg?alt=media&token=b419d507-9de8-4c4c-97e3-6b4eb2202e68",
  "https://firebasestorage.googleapis.com/v0/b/lotapp-9e84d.appspot.com/o/stone.jpg?alt=media&token=e9d41537-7f26-4bfd-86eb-c2ef6fc58a9c"
];

const Home = () => {

  return (
    <View style={styles.container}>
    <SafeAreaView style={{flex: 1}}>
      <Header title={'Home'}/>
    <ImageBackground style={styles.background} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJkcPDukD6ZXsfIiM961X4rtXYrKKlwwKeDg&usqp=CAU' }}>
      <View style={styles.welcome}>
      <ImagesSwiper 
        images={customImg}
        autoplay={true} 
        autoplayTimeout={1.5}
        showsPaination={true}
        width={Dimensions.get('window').width} 
        height={Dimensions.get('window').height/1.7} 
      />
      </View>
      </ImageBackground>
    </SafeAreaView>
  </View>
  )
}
export default Home



