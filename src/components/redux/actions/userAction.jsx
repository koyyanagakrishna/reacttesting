import { UPDATE_USER_DATA } from "./actionTypes";

export const userAction = (data) => {
    return {
        type: UPDATE_USER_DATA,
        payload: data
    }
}
