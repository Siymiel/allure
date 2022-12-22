import { publicRequest } from "../../requestMethods";
import { 
    getCategoriesStart, 
    getCategoriesSuccess, 
    getCategoriesFailure, 
    getCategoryStart, 
    getCategorySuccess, 
    getCategoryFailure, 
} from "../features/categoryFeature"

export const getCategories = async (dispatch) => { 
    dispatch(getCategoriesStart())

    try {
        const res = await publicRequest.get('/categories')
        dispatch(getCategoriesSuccess(res.data.categories))
    } catch (err) {
        dispatch(getCategoriesFailure())
    }
 }

 export const getCategory = async (dispatch, id) => {
    dispatch(getCategoryStart())

    try {
        const res = await publicRequest.get(`/categories/${id}`)
        dispatch(getCategorySuccess(res.data.category))
    } catch (err) {
        dispatch(getCategoryFailure())
    }
 }
    
