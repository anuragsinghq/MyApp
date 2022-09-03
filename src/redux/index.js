import { applyMiddleware, createStore,compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer } from "redux-persist";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rootReducer } from './reducers/root-reducer';
import rootSaga from './sagas';
export * from './actions';

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: []
};

const enhancers = [];

const reduxDevTool = window.__REDUX_DEVTOOLS_EXTENSION__;

if (typeof devToolsExtension === "function") {
  enhancers.push(reduxDevTool());
}

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const allMiddlewares = applyMiddleware(sagaMiddleware);
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  const store = createStore(persistedReducer, !!enhancers.length ? compose(allMiddlewares, ...enhancers) : allMiddlewares);
  sagaMiddleware.run(rootSaga);
  return store;
};

export default configureStore;
