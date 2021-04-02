import {LOGGED_IN} from "../actions/action"

const initial={
    logged:false
}

const LoggedReducer=(state=initial,action)=>{
    switch(action.type){
        case LOGGED_IN:
            return {...state,logged:true}
        default:
            return state
    }
}

export default LoggedReducer