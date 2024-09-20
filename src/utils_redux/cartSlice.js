import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState : {
        items : [],
        qty : 0
    },
    reducers :{
        addItem(state,action){
            state.items.push(action.payload)
        },
        increment(state,action){
            state.qty +=1
        },
        decrement(state,action){
            state.qty -=1
        }
    }
})

export const {addItem,increment,decrement} = cartSlice.actions
export default cartSlice.reducer