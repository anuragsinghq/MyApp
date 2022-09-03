import { FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native'
import React from 'react';
import styles from '../getDataContainer/style';
import Header from '../../common/component/header/Header';
import data from '../../localData';

const StoreData = ({ localData,setLocalData}) => {

  const storeLocalData = () => {
    setLocalData(data);
  };

  const renderItem = ({ item }) => {
    return (
    <View style={styles.flatlisItemtWrapper}>
     <Text style={styles.btnText}>{item.title}</Text>
     </View>
    )
  };


  return (
    <View style={styles.container}>
        <Header title='STORE LOCAL DATA'/>
      <SafeAreaView>
      
      <View style={styles.btnParentSection}>
              <TouchableOpacity
                onPress={storeLocalData}
                style={styles.btnSection}>
                <Text style={styles.btnText}>Store Data</Text>
              </TouchableOpacity>
      </View>
        {localData &&
        <View style={styles.flatlisWrapper}>
          <FlatList
            data={localData}
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

export default StoreData

