import {t} from './actions';

const initState = {
    data: null
};

export const userReducer = (state = initState, action) => {
    switch (action.type) {
        case t.LOAD_USER_DATA_SUCCESS:
            return {
                ...state,
                user: action.data
            };

        default:
            return state;
    }
};