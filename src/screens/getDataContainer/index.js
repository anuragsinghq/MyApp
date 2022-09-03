import { connect } from 'react-redux';
import { getApiData } from '../../redux';
import GetDataScreen from './GetDataScreen';

const mapStateToProps = (state) => ({
    apiData: state.temporary.apiData,
    loadingData: state.temporary.loadingData
});

const mapDispatchToProps = (dispatch) => ({
    getApiData:() => dispatch(getApiData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GetDataScreen);

