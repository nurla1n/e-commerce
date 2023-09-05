import { createSlice } from "@reduxjs/toolkit";
import {PRODUCTS} from '../products'
export const Cart=createSlice({
    name:"cart",
    initialState:{
      items:PRODUCTS,
      array:Array(8).fill(0),
      sum:0
    },
    reducers:{
       addToCart:(state,action)=>{
        // let index=array[id-1]
      state.array[action.payload-1]+=1
    //   console.log(state.array[action.payload-1])
    },
    increase:(state,action)=>{
      state.array[action.payload-1]+=1
    },
    decrease:(state,action)=>{
        state.array[action.payload-1]-=1
    },
    totalAmount:(state)=>{
          state.sum=0
        state.array.forEach((item,index)=>{
            state.sum+=item*state.items[index].price
        })
        // console.log(state.sum)
        
    }

}})

export default Cart.reducer
export const {addToCart,increase,decrease,totalAmount}=Cart.actions