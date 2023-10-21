// reducers/authReducer.js

const initialState = {
    isAuthenticated: false,
    user: null,
    // other authentication-related data
    };

    const Signout = (state = initialState, action) => {
    switch (action.type) {
        case 'SIGNOUT':
        return {
            ...initialState,
        };

        default:
        return state;
    }
};

export default Signout;
