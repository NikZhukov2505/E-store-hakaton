


const initialState = {
    isLoading: false
}

const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'


const storeReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }
        default:
            return state;
    }
}

export const toggleIsLoading = (isLoading) => ({ type: TOGGLE_IS_LOADING, isLoading })




export default storeReducer