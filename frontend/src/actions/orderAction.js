import {
    CREATE_ORDER_FAIL,CLEAR_ERRORS,CREATE_ORDER_REQUEST,CREATE_ORDER_SUCCESS,MY_ORDER_FAIL,MY_ORDER_REQUEST,MY_ORDER_SUCCESS,ORDER_DETAILS_FAIL,ORDER_DETAILS_REQUEST,ORDER_DETAILS_SUCCESS
} from "../constants/orderConstants"

import axios from "axios";

export const createOrder = (order) => async(dispatch) => {
    try{
        dispatch({type : CREATE_ORDER_REQUEST});
        
        try{
            const config = { headers : { "Content-Type" : "application/json" }};
      
        const { data }  = await axios.post("/api/v1/order/new",order,config);
    
    
        dispatch({type: CREATE_ORDER_SUCCESS, payload : data.order})
    }
        catch(error){
            console.error(error)}
    }
    catch(error){
        dispatch({type : CREATE_ORDER_FAIL,
        payload: error.response.data.message, 
    });
    }
}

export const myOrders = () => async (dispatch) => {
    try {
      dispatch({ type: MY_ORDER_REQUEST });
        
      const { data } = await axios.get("/api/v1/orders/me");
  
      dispatch({ type: MY_ORDER_SUCCESS, payload: data.order });
    } catch (error) {
      dispatch({
        type: MY_ORDER_FAIL,
        payload: error.response.data.message,
      });
    }
  };

  export const getOrderDetails = (id) => async (dispatch) => {
    try {
      dispatch({ type: ORDER_DETAILS_REQUEST });
    
      const { data } = await axios.get(`/api/v1/order/${id}`);
     
      
      dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data.order });
    } catch (error) {
        
      dispatch({
        type: ORDER_DETAILS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

export const clearErrors = () => async (dispatch) => {
    dispatch({ type : CLEAR_ERRORS});
}