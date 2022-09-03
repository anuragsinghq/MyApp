import {ACTION_CONSTANT} from '../../actions';

const localDataReducer = (state = null, action) => {
  switch (action.type) {
    case ACTION_CONSTANT.SET_LOCAL_DATA:
      return action.data;
    default:
      return state;
  }
};

export default localDataReducer;
