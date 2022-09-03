import { FlatList, SafeAreaView, Text, TouchableOpacity, View,Spinner ,Icon} from 'react-native'
import React, { useEffect } from 'react';
import styles from './style';
import Header from '../../common/component/header/Header';

const GetData = ({ apiData,getApiData,loadingData}) => {

  const fetchApiData = () => {
    getApiData();
  };

  const renderItem = ({ item }) => {
    return (
    <View style={styles.flatlisItemtWrapper}>
     <Text style={styles.btnText}>{item.name}</Text>
     </View>
    )
  };

  if(loadingData){
    return(
        <Spinner style={{alignSelf:'center'}} color='grey'/>
    );
  }

  return (
    <View style={styles.container}>
        <Header title='GET DATA'/>
      <SafeAreaView>
      
      <View style={styles.btnParentSection}>
              <TouchableOpacity
                onPress={fetchApiData}
                style={styles.btnSection}>
                <Text style={styles.btnText}>Fetch Data</Text>
              </TouchableOpacity>
      </View>
        {apiData &&
        <View style={styles.flatlisWrapper}>
          <FlatList
            data={apiData}
            renderItem={renderItem}
            keyExtractor={(item,index)=> index}
            showsVerticalScrollIndicator={false}
          />
        </View>
        }
      </SafeAreaView>
    </View>
  )
}

export default GetData

