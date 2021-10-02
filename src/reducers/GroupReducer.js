import { types } from "../types/types";

// const initialState={
//     // {
//     //     "id":0,
//     //     "name": "none",
//     //     "task": [],
//     //     "user": [],
//     // }
// }

export const GroupReducer = (state = {}, action) => {
    switch (action.type) {
        case types.eventLoaded:
            return {
                ...state,
                groups: [...action.payload],
            };
        case types.groupActive:
            return {
                ...state,
                groupActive: action.payload,
            };
        default:
            return state;
    }
};
