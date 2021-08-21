import {createStore, combineReducers} from 'redux';
import {TaskReducer} from '../reducers/TaskReducer';


const reducers = combineReducers({
    group:TaskReducer,
});

export const store =createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);