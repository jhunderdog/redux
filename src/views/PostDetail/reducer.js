import * as types from './actionTypes';

const initialState = {
    post:null,
    comments:[],
    isLoading:false,
    error:null,
};

const reducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case types.FETCH_POST_DETAIL_REQUEST: {
            return {
                ...initialState,
                isLoading:true,
            }
        }
        case types.FETCH_POST_DETAIL_SUCCESS: {
            console.log('1')
            return {
                ...initialState,
                isLoading:false,
                post: action.payload.post,
                comments: action.payload.comments,
            }
        }   
        case types.FETCH_POST_DETAIL_FAILURE: {
            return {
                ...initialState,
                isLoading:false,
                error: action.error,
            }
        }
        default: return state;
    }
}

export default reducer;