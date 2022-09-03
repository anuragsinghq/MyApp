import { combineReducers } from 'redux';
import { temporaryReducers } from './temporary';
const rootReducer = combineReducers({
  temporary: temporaryReducers,
});

export { rootReducer };
