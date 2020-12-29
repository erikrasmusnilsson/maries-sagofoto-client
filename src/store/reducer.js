import * as actionTypes from './actions';

const initialState = {
    user: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOG_IN:
            return {
                user: action.user
            };
        case actionTypes.LOG_OUT:
            console.log('logging out')
            return {
                user: null
            };
        default: 
            return state;
    }
}

export { reducer };