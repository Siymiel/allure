import { publicRequest } from "../../requestMethods";
import { 
    getProductsStart, 
    getProductsSuccess, 
    getProductsFailure, 
    getProductStart, 
    getProductSuccess, 
    getProductFailure, 
    getLatestProductsStart,
    getLatestProductsSuccess,
    getLatestProductsFailure,
} from "../features/productsFeature"

export const getProducts = async (dispatch) => { 
    dispatch(getProductsStart())

    try {
        const res = await publicRequest.get('/products')
        dispatch(getProductsSuccess(res.data))
    } catch (err) {
        dispatch(getProductsFailure())
    }
 }

export const getProduct = async (dispatch, id) => {
    dispatch(getProductStart())

    try {
        const res = await publicRequest.get(`/products/${id}`)
        dispatch(getProductSuccess(res.data))
    } catch (err) {
        dispatch(getProductFailure())
    }
}

export const getCategoryProducts = async (dispatch, categoryId) => {
    dispatch(getProductsStart())

    try {
        const res = await publicRequest.get(`/products?category=${categoryId}`)
        dispatch(getProductsSuccess(res.data))
    } catch (err) {
        dispatch(getProductsFailure())
    }
}

export const getLatestProducts = async (dispatch, x) => {
    dispatch(getLatestProductsStart())

    try {
        const res = await publicRequest.get(`/products?new=${x}`)
        console.log(res.data)
        dispatch(getLatestProductsSuccess(res.data))
    } catch (err) {
        dispatch(getLatestProductsFailure())
    }
}
    
