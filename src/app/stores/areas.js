import AreasService from './../services/AreasService';

const setAreas = (data) => ({
    type: "SET_AREA",
    data,
});

export const fetchAreas = () => (dispatch) =>
    AreasService.findAll().then(res => dispatch(setAreas(res)));

export const areasReducer = (state = [], action) => {
    switch(action.type) {
        case "SET_AREA":
            return action.data;
        default: return state;
    }
};
