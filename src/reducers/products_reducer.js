

const products_reducer = (state,action) =>{

    if(action.type==='SET_AREA'){
        return {...state,area:action.payload}
    }
    if(action.type==='SET_MANDIS'){
        const {area,all_mandis}=state;
        //console.log(area);
        let tempmandis
        if(area==='all')
        {
            tempmandis=all_mandis
        }else{
            tempmandis=all_mandis.filter((mandi)=>mandi.area===area)
        }
        return {...state,mandis:tempmandis}
    }
    return state
    throw new Error(`No Matching "${action.type}" - action type `)

}

export default products_reducer