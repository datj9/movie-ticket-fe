import actionTypes from "./actionTypes";

export const getTheatersStart = () => ({
    type: actionTypes.GET_THEATERS_START,
});

export const getTheatersSuccess = (theaters) => ({
    type: actionTypes.GET_THEATERS_SUCCESS,
    theaters,
});
