import {ACTION_CONSTANT} from '../../actions';

const loadingDataReducer = (state = false, action) => {
  switch (action.type) {
    case ACTION_CONSTANT.LOADING_DATA:
        console.log("loading reducer",action)
      return action.data;
    default:
      return state;
  }
};

export default loadingDataReducer;
