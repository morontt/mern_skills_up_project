import {logoutAction} from "../index";

export function logoutThunkAction() {
    return (dispatch) => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        dispatch(logoutAction())
    }
}