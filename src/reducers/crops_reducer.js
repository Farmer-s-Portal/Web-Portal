const crops_reducer = (state, action) => {
    if (action.type === "SET_CROPS") {
      return { ...state, allCrops: action.payload }
    }
    throw new Error(`No Matching "${action.type}" - action type `);
    return state;
  };
  
  export default crops_reducer;
  