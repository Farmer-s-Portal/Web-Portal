import React, { useContext, useEffect, useState, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/products_reducer";
const Mandisdummy = [
  {
    commodity: "Keshopur Mandi",
    marketCenter: "Keshopur",
    shops: 20,
    rating: 4.5,
    reviews: ["good", "abvaidva", "abvnaenavd", "avnioneva"],
    area: "South West Delhi",
    modalPrice: 5000
  },
  {
    commodity: "Azadpur Mandi",
    marketCenter: "Azadpur",
    shops: 20,
    rating: 2.5,
    reviews: ["good", "abvaidva", "abvnaenavd", "avnioneva"],
    area: "South West Delhi",
    modalPrice: 4300
  },
  {
    commodity: "Reawr",
    marketCenter: "Rewari District",
    shops: 25,
    rating: 3.5,
    reviews: ["good", "abvaidva", "abvnaenavd", "avnioneva"],
    area: "Rewari,Haryana",
    modalPrice: 3750
  },
  {
    commodity: "qwer",
    marketCenter: "Rewari District",
    shops: 25,
    rating: 3.5,
    reviews: ["good", "abvaidva", "abvnaenavd", "avnioneva"],
    area: "Rewari,Haryana",
    modalPrice: 2500
  },
  {
    commodity: "Anaj Mandi",
    marketCenter: "Najafgarh",
    shops: 25,
    rating: 4.1,
    reviews: ["good", "abvaidva", "abvnaenavd", "avnioneva"],
    area: "South West Delhi",
    modalPrice: 2500
  },
];

const initialState = {
  loading: false,
  area: "all",
  all_mandis: Mandisdummy,
  mandis: Mandisdummy,
  locations: [],
  scommodity: 'all',
  commodities: []
};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setarea = (e) => {
    e.preventDefault();
    const value = e.target.value;
    //console.log(value);
    dispatch({ type: "SET_AREA", payload: value });
  };
  const setCommodity = (e) => {
    e.preventDefault();
    const value = e.target.value;
    //console.log(value);
    dispatch({ type: "SET_COMMO", payload: value });
  };

  const fetchMandiData = async (url) => {
    try {
      console.log("Api calling");
      const res = await axios.get(url);
      const data = res.data;
      console.log("fetched API avlues", data);
      return data;
    } catch (error) {
      console.log(error);
    }
    console.log("fetct try catch outside");
  };

  useEffect(() => {
    console.log("use effect")
    dispatch({type:'SET_LOADING'})
    fetchMandiData("https://mandi-details-api.herokuapp.com/api")
     .then(function(data){
      // console.log("data",);
      const locations = [...new Set(data.map(item => item.marketCenter.split(',').pop()))];
      const commodities = [...new Set(data.map(item => item.commodity))];
      dispatch({type:'GET_MANDIS',payload:[data,locations,commodities]})
      console.log(state.mandis)
     })
   
  }, []);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        setarea,
        setCommodity
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
