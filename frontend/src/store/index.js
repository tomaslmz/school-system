import { persistStore } from 'redux-persist';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducer from './modules/rootReducer';
import saga from './modules/rootSaga';
import persist from './modules/persist';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(persist(reducer), applyMiddleware(sagaMiddleware));

sagaMiddleware.run(saga);

export const persistor = persistStore(store);
export default store;
