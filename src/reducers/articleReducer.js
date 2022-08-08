import {actions} from '../actions/actionType'
export const initState={
    articles:[],
    loading:false,
}
const articleReducer=(state=initState,action)=>{
    switch(action.type)
    {
        case actions.GET_ARTICLES:
            return{
                ...state,
                articles:action.payload,
            }
        
        case actions.SET_LOADING_STATUS:
            return{
                ...state,
                loading:action.status,
            }
        default:
            return state;
    }
}
export default articleReducer;