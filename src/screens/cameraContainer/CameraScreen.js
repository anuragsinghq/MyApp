import React, {Fragment, Component,useState} from 'react';
import {launchCamera} from 'react-native-image-picker';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../common/component/header/Header';
import styles from './style';

export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileUri: '',
    };
  }

  takePicture = () => {
    let options = {
      cameraType: 'front',
      mediaType: 'photo',
      includeBase64: true,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchCamera(options, response => {
      console.log('Response = ', response);
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else {
        console.log('response', JSON.stringify(response));
        this.setState({
          fileUri: response.assets[0].uri,
        });
      }
    });
  };

  renderFileUri() {
    if (this.state.fileUri) {
      return <Image source={{uri: this.state.fileUri}} style={styles.images} />;
    } else {
      return (
        <Image
          source={{
            uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
          }}
          style={styles.images}
        />
      );
    }
  }
  render() {
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <Header title='Camera'/>
          <View style={styles.body}>
            <Text
              style={{textAlign: 'center', fontSize: 20, paddingBottom: 10}}>
              Pick Images from Camera
            </Text>
            <View style={styles.ImageSections}>
              <View>{this.renderFileUri()}</View>
            </View>

            <View style={styles.btnParentSection}>
              <TouchableOpacity
                onPress={this.takePicture}
                style={styles.btnSection}>
                <Text style={styles.btnText}>Directly Launch Camera</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
}

