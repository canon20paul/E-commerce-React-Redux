import {combineReducers} from 'redux'
import cartReducer from './cartReducer'
import itemsReducer from './itemReducer'

const rootReducer = combineReducers({
    itemsReducer : itemsReducer,
    cartReducer: cartReducer
})
export default rootReducer