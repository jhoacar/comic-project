import { SET_AVATAR, SET_EMAIL, SET_IMAGE, SET_NAME, SET_PASSWORD } from "./constants";

export default function registerReducer(state, action) {

    switch (action.type) {
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            };
        case SET_EMAIL:
            return {
                ...state,
                email: action.payload
            };
        case SET_PASSWORD:
            return {
                ...state,
                password: action.payload
            };
        case SET_AVATAR:
            return {
                ...state,
                avatar: action.payload
            };
        case SET_IMAGE:
            return {
                ...state,
                image: action.payload
            };
        default:
            return state;
    }
}