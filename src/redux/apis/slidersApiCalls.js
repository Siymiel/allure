import { publicRequest } from "../../requestMethods";
import { getSlidersStart, getSlidersSuccess, getSlidersFailure } from '../features/sliderFeature';

export const getSliders = async (dispatch) => {
    dispatch(getSlidersStart())

    try {
        const res = await publicRequest.get('/slideritems')
        dispatch(getSlidersSuccess(res.data))
    } catch (err) {
        dispatch(getSlidersFailure())
    }
}