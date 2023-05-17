import RootReducer from './rootReducer';
import logger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthReducer from '../../modules/practice/reducer';
import createSagaMiddleware from 'redux-saga';
import Saga from './saga';

const sagaMiddleware = createSagaMiddleware();

let middleware: any = [sagaMiddleware, logger];

//@ts-ignore
const {pathname} = window.location || {};

const enhancer = compose(applyMiddleware(...middleware));

const persistConfig = {
  key: 'root',
  blacklist: [],
  storage: AsyncStorage,
  whitelist: ['AuthReducer'],
};

const persistedReducer = persistReducer(persistConfig, RootReducer);

export const store = createStore(persistedReducer, enhancer);
export const persistor = persistStore(store);
sagaMiddleware.run(Saga);
