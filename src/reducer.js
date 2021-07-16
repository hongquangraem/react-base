import { connectRouter } from 'connected-react-router'
import { combineReducers } from 'redux'
import { history } from './utils/history'

const rootReducer = combineReducers({
  router: connectRouter(history),
})

export default rootReducer
