import axios from 'axios'
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from '../constant/RegisterConstant'

export const RegisterMember = () => async (dispatch){
    try {
        dispatch({type:REGISTER_REQUEST})
        const {data}= await axios.post()
    } catch (error) 
        
    }

