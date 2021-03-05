const crops_reducer = (state, action) => {
  if (action.type === "SET_CROPS") {
    return { ...state, allCrops: action.payload };
  }
  if (action.type === "SET_LOADING") {
    return { ...state, loading: true };
  }

  if (action.type === "NOT_LOADING") {
    return { ...state, loading: false };
  }
  throw new Error(`No Matching "${action.type}" - action type `);
  return state;
};

export default crops_reducer;
