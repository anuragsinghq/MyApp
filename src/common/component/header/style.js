import { StyleSheet} from 'react-native'
import Colors from '../../Colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.appTheme,
        width: '100%',
        height: '5%',
        alignItems: "center",
        justifyContent: "center",
    },
    textStyle: {
        fontWeight: 'bold',
        color: Colors.white
    }
})

export default styles;