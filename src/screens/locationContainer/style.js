import { StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container:{
        flex: 1, 
        backgroundColor: 'white' 
    },
    locationText:{
        fontWeight:'800',
        fontSize:18,
        color:'#00f'
    },
    locationnWrapper: {
        flexDirection:'column',
        paddingVertical:15
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
})

export default styles;