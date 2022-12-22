import { publicRequest } from "../../requestMethods";
import { 
    getStoresStart, 
    getStoresSuccess, 
    getStoresFailure, 
    getStoreStart, 
    getStoreSuccess, 
    getStoreFailure, 
} from "../features/storeFeature"

export const getStores = async (dispatch) => { 
    dispatch(getStoresStart())

    try {
        const res = await publicRequest.get('/stores')
        dispatch(getStoresSuccess(res.data))
    } catch (err) {
        dispatch(getStoresFailure())
    }
 }

 export const getStore = async (dispatch, id) => {
    dispatch(getStoreStart())

    try {
        const res = await publicRequest.get(`/stores/${id}`)
        dispatch(getStoreSuccess(res.data))
    } catch (err) {
        dispatch(getStoreFailure())
    }
 }
    
