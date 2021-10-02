import {createStore, combineReducers} from 'redux';
import {GroupReducer} from '../reducers/GroupReducer';


const reducers = combineReducers({
    group:GroupReducer,
});

export const store =createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);