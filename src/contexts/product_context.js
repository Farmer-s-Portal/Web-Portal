import React, { useContext, useEffect, useState , useReducer } from 'react'
import axios from 'axios'
import reducer from '../reducers/products_reducer'
const Mandisdummy = [
      {
        name:'abcd',
        location:'Najafgarh',
        shops: 20,
        rating: 4.5,
        reviews: [
          'good','abvaidva','abvnaenavd','avnioneva',
        ],
        area:'South West Delhi'
      },
      {
        name:'nbvana',
        location:'Najafgarh',
        shops: 20,
        rating: 2.5,
        reviews: [
          'good','abvaidva','abvnaenavd','avnioneva',
        ],
        area:'South West Delhi'
      },
      {
        name:'qwer',
        location:'Rewari District',
        shops: 25,
        rating: 3.5,
        reviews: [
          'good','abvaidva','abvnaenavd','avnioneva',
        ],
        area:'Rewari,Haryana'
      },
      {
        name:'qwer',
        location:'Rewari District',
        shops: 25,
        rating: 3.5,
        reviews: [
          'good','abvaidva','abvnaenavd','avnioneva',
        ],
        area:'Rewari,Haryana'
      }
     ]

const initialState = {
    loading:false,
    area:'all',
    all_mandis:Mandisdummy,
    mandis:Mandisdummy,
}

const ProductsContext = React.createContext();

export const ProductsProvider = ({children}) =>{
    const [state,dispatch] = useReducer(reducer, initialState);
   
    const setarea = (e) =>{
        e.preventDefault()
        const value=e.target.value
        //console.log(value);
        dispatch({type:'SET_AREA',payload:value})
    }

    useEffect(()=>{
       dispatch({type:'SET_MANDIS'})
    },[state.area])
    return (
        <ProductsContext.Provider value={{
            ...state,
            setarea,
        }}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () =>{
    return useContext(ProductsContext)
}