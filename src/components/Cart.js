import React, { createContext, useReducer, useEffect } from 'react'
import './App.css'
import CartContex from './CartContex';
import Products from './Products';
import { reducer } from './reducer'



export const ContexCart = createContext();

const initialState = {
  item: Products,
  totalAmount: 0,
  totalItem: 0
}

const Cart = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  //to delete the individual items
  const removeItem = (id) => {
    return dispatch ({
      type: "REMOVE_ITEM",
      payload: id,
    });

  }
  //to delete all items from the cart
  const clearCart = () => {
    return dispatch ({
      type: "CLEAR_CART"

    });
  }
  // to increment 
  const increment = (id) => {
    return dispatch ({
      type: "INCREMENT",
      payload: id,
    });
  }

  // to decrement
  const decrement = (id) => {
    return dispatch ({
      type: "DECREMENT",
      payload: id,
    });
  }
  
  // useEffect to update the data

  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
    // console.log('hello');
  
  }, [state.item]);


    return (
        <>
          <ContexCart.Provider value={ {...state, removeItem, clearCart, increment, decrement}}>
            <CartContex />
          </ContexCart.Provider>
        </>
    )
}

export default Cart;
