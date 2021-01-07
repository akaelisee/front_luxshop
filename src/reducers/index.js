// @ts-nocheck
import { combineReducers } from 'redux'
// @ts-ignore
import library from './library'
import cardReducers from './cardReducers'
export default combineReducers({
  library,
  cardReducers
})
