import {ACTION_CONSTANT} from '../../actions';

const apiDataReducer = (state = null, action) => {
  switch (action.type) {
    case ACTION_CONSTANT.SET_API_DATA:
      return action.data;
    default:
      return state;
  }
};

export default apiDataReducer;
