import { createStore, applyMiddleware } from 'redux'
import { persistStore } from 'redux-persist'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootReducer from './root-reducer'
import { fetchCollectionsStart } from './shop/shop.sagas'

const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, sagaMiddleware]

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(fetchCollectionsStart)

export const persistor = persistStore(store)
