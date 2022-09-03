import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
        container:{
            flex: 1, 
            backgroundColor: 'white'
        },
       btnParentSection: {
        alignItems: 'center',
        marginTop: 10,
      },
      btnSection: {
        width: 180,
        height: 50,
        backgroundColor: '#00f',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 3,
        marginBottom: 10,
      },
      btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 14,
        fontWeight: 'bold',
      },
      flatlisWrapper: {
        alignSelf:'center',
        marginVertical:'5%',
        height:'75%',
        width:'100%',
        paddingHorizontal: '10%',
        marginHorizontal:'5%'
      },
      flatlisItemtWrapper: {
        marginVertical:10,
        paddingVertical: 10,
        backgroundColor:'red',
        border: 5,
        borderRadius: 5,
        paddingHorizontal: '5%'
       },
})

export default styles;