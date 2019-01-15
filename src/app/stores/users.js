import UserService from './../services/UserService';

const setUser = (data) => ({
    type: "SET_USER",
    data,
});

export const userReducer = (state = {}, action) => {
    switch(action.type) {
        case "SET_USER":
            return action.data;
        default: return state;
    }
};

export const fetchUser = () => (dispatch) =>
  UserService
    .findByMe()
    .then(res => dispatch(setUser(res)))
    .catch(err => console.log(err));
