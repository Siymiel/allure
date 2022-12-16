import { publicRequest } from "../../requestMethods";
import toast from 'react-hot-toast';
import { 
    loginStart, 
    loginSuccess, 
    loginFailure, 
    logoutStart, 
    logoutSuccess, 
    logoutFailure } from "../features/userFeature"

export const attemptLogin = async (dispatch, user) => {
    dispatch(loginStart());

    try {
        const res = await publicRequest.post('/users/login', user)
        dispatch(loginSuccess(res.data))
        toast.success("Successfully logged in!")
    } catch (err) {
        dispatch(loginFailure())
    }
}

export const attemptLogout = async (dispatch, username) => {
    dispatch(logoutStart());

    try {
        await publicRequest.post('/logout', username)
        dispatch(logoutSuccess())
        toast.success("Successfully logged out!")
    } catch (err) {
        dispatch(logoutFailure())
    }
}
