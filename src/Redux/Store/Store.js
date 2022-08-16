const initialState = {
    username : 'Minhaj',
    authority:true
};


const reducer = (state=initialState,action)=>{
    switch(action.type){
        case 'true':
        return {
            ...state,
            authority:true
        }
        break;
        case 'false':
            return {
                ...state,
                authority:false
            }
            break;
    
        default:
        return { ...state}
    }
}

export default reducer;