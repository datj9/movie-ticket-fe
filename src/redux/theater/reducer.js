import actionTypes from "./actionTypes";

const INITIAL_STATE = {
    theaters: [],
    isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.GET_THEATERS_START:
            return {
                ...state,
                isLoading: true,
            };
        case actionTypes.GET_THEATERS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                theaters: action.theaters,
            };
        default:
            return state;
    }
};
