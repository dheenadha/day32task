import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
    name :"price",
    initialState:{
        total : 0
    },
    reducers:{
        addPrice :(state,action)=>{
            state.total += action.payload
        },
        subPrice :(state,action)=>{
            state.total -= action.payload
        }
    }
})

export const {addPrice,subPrice} = priceSlice.actions
export default priceSlice.reducer