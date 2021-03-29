import {combineReducers} from "redux"
import Login from  "./LogInReducer"

const allReducers = combineReducers({
    Login:Login
})

export default allReducers;