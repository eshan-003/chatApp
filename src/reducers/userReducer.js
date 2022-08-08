import {actions} from '../actions/actionType'
const INITIAL_STATE={
    user:null,
}
const userReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type)
    {
        case actions.SET_USER:
            return{
                ...state,
                user:action.user,
    }
        default:
            return state;
    }
}
export default userReducer;