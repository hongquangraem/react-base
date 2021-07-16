import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { history } from './utils/history'
import rootReducer from './reducer'
import rootSaga from './saga'

const initialState = {}
const enhancers = []
const sagaMiddleware = createSagaMiddleware()
const middleware = [routerMiddleware(history), sagaMiddleware]
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
}

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers)

const store = createStore(
  persistReducer(persistConfig, rootReducer),
  initialState,
  composedEnhancers,
)

export const persistor = persistStore(store)

sagaMiddleware.run(rootSaga)

export default store
