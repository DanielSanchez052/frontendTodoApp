import {types} from '../types/types';

const initialState={
    'tasks': {
        'tasksToDo': [],
        'taskInProcess':[],
        'taskFinalized':[]
    }
}

export const TaskReducer = (state=initialState,action)=>{
    switch (action.type) {
        case types.eventLoaded:
            return {
                ...state,
                'tasks': {
                    ...action.payload
                }
            }
        default:
            return state;
    }
}