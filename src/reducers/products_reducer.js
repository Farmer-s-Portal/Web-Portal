const products_reducer = (state, action) => {
  if (action.type === "SET_AREA") {
    return { ...state, area: action.payload };
  }
  if (action.type === "SET_COMMO") {
    return { ...state, scommodity: action.payload };
  }
  if (action.type === "GET_MANDIS") {
    return {
      ...state,
      loading: false,
      all_mandis: action.payload[0],
      mandis: action.payload[0],
      locations: action.payload[1],
      commodities: action.payload[2],
    };
  }
  if (action.type === "SET_LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "STOP_LOADING") {
    return { ...state, loading: false };
  }
  if (action.type === "SET_MANDIS") {
    const { area, all_mandis } = state;
    //console.log(area);
    let tempmandis;
    if (area === "all") {
      tempmandis = all_mandis;
    } else {
      tempmandis = all_mandis.filter((mandi) => mandi.area === area);
    }
    return { ...state, mandis: tempmandis };
  }

  throw new Error(`No Matching "${action.type}" - action type `);
  return state;
};

export default products_reducer;
