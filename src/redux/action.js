import {
    SHOWBUTTON
} from "./actionTypes";

export const showbutton = (payload) => {
    return {
        type: SHOWBUTTON,
        payload: payload
    }
}