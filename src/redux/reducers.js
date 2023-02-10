import { SHOWBUTTON } from "./actionTypes"

const initialState = {
    visible: false
}
export const mainreducer = (state = initialState, action) => {
    console.log(state.visible);
    switch (action.type) {
        case SHOWBUTTON:
            return {
                ...state,
                visible: state.visible
            }
        default:
            return state;
    }
}