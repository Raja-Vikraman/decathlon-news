import {GET_NEWS} from './actions.js'
let initialState = {
    newsContent:[]
}

export function reducers(state=initialState, action) {
    if(action.type == GET_NEWS) {
        return  {
            ...state,
            newsContent: action.payload
        }
    }
    return state
}