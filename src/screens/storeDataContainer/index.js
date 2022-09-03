import { connect } from 'react-redux';
import { setLocalData } from '../../redux';
import StoreDataScreen from './StoreDataScreen';

const mapStateToProps = (state) => ({
    localData: state.temporary.localData,
});

const mapDispatchToProps = (dispatch) => ({
    setLocalData:(data) => dispatch(setLocalData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreDataScreen);

