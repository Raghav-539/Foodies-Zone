/* eslint-disable default-case */
// checking for action 
// if action exist then item will be added to cart

const INIT_STATE = {
    carts : [],
}

export const cartreducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":

        // quantity increasing when same item added  again 
            const ItemIndex = state.carts.findIndex((item)=> item.id === action.payload.id);

            if(ItemIndex >= 0){
                state.carts[ItemIndex].qnty +=1
                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else{
                const temp = {...action.payload,qnty:1}
                 return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case "RMV_CART":
            const data = state.carts.filter((elem)=> elem.id !== action.payload);
            return {
                ...state, 
                carts:data
            }
            
        case "RMV_ONE":
            const IteamIndex_dec = state.carts.findIndex((iteam)=> iteam.id === action.payload.id);
   
            if(state.carts[IteamIndex_dec].qnty >= 1){
                const dltiteams = state.carts[IteamIndex_dec].qnty -= 1
                console.log([...state.carts,dltiteams]);

                return {
                    ...state,
                    carts:[...state.carts]
                }
            }else if(state.carts[IteamIndex_dec].qnty === 1 ){
                const data = state.carts.filter((el)=>el.id !== action.payload);

                return {
                    ...state,
                    carts:data
                }
            }

        // eslint-disable-next-line no-fallthrough
        default : 
            return state
    }
}


// ...state.carts - store previous data
// action.payload - store new data that will be added 