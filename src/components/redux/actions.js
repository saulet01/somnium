import { ADD_TO_BUCKETS, CLEAR_BUCKETS } from "./types";

export const addToBucket = (book) => (dispatch) => {
    dispatch({ type: ADD_TO_BUCKETS, payload: book });
};

export const clearBucket = (book) => (dispatch) => {
    dispatch({ type: CLEAR_BUCKETS });
};
