import React, { useContext, useEffect, useState, useReducer } from "react";
import axios from "axios";
import reducer from "../reducers/products_reducer";
const Mandisdummy = [
  {
    name: "Keshopur Mandi",
    location: "Keshopur",
    shops: 20,
    rating: 4.5,
    reviews: ["good", "abvaidva", "abvnaenavd", "avnioneva"],
    area: "South West Delhi",
  },
  {
    name: "Azadpur Mandi",
    location: "Azadpur",
    shops: 20,
    rating: 2.5,
    reviews: ["good", "abvaidva", "abvnaenavd", "avnioneva"],
    area: "South West Delhi",
  },
  {
    name: "Reawr",
    location: "Rewari District",
    shops: 25,
    rating: 3.5,
    reviews: ["good", "abvaidva", "abvnaenavd", "avnioneva"],
    area: "Rewari,Haryana",
  },
  {
    name: "qwer",
    location: "Rewari District",
    shops: 25,
    rating: 3.5,
    reviews: ["good", "abvaidva", "abvnaenavd", "avnioneva"],
    area: "Rewari,Haryana",
  },
  {
    name: "Anaj Mandi",
    location: "Najafgarh",
    shops: 25,
    rating: 4.1,
    reviews: ["good", "abvaidva", "abvnaenavd", "avnioneva"],
    area: "South West Delhi",
  },
];

const initialState = {
  loading: false,
  area: "all",
  all_mandis: Mandisdummy,
  mandis: Mandisdummy,
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

  const fetchMandiData = async (url) => {
    try {
      console.log("Api calling");
      const res = await axios.get(url);
      const data = res.data;
      console.log("fetched API avlues", data);
    } catch (error) {
      console.log(error);
    }
    console.log("fetct try catch outside");
  };

  useEffect(() => {
    fetchMandiData("https://mandi-details-api.herokuapp.com/api");
  }, [state.area]);

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        setarea,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductsContext);
};
