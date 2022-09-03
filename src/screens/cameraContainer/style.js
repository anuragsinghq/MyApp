import { StyleSheet,Dimensions} from 'react-native'
const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: 'white',
    },
  
    body: {
      backgroundColor: 'white',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 1,
      height: Dimensions.get('screen').height - 20,
      width: Dimensions.get('screen').width,
    },
    ImageSections: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 8,
      paddingVertical: 8,
      justifyContent: 'center',
    },
    images: {
      width: 250,
      height: 250,
      borderColor: 'black',
      borderWidth: 1,
      marginHorizontal: 3,
    },
    btnParentSection: {
      alignItems: 'center',
      marginTop: 10,
    },
    btnSection: {
      width: 225,
      height: 50,
      backgroundColor: '#DCDCDC',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
      marginBottom: 10,
    },
    btnText: {
      textAlign: 'center',
      color: 'gray',
      fontSize: 14,
      fontWeight: 'bold',
    },
  });

export default styles;