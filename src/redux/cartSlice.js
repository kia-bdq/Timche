import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartArray: [],
    count :0,
    sum: 0
  },

  reducers: {

    addToCart: (state, commodity) => {
      if(!state.cartArray.some(cm => cm.id === commodity.payload.id && cm.size === commodity.payload.size)){
        state.cartArray.push(commodity.payload);
      }else{
        state.cartArray.find(cm => cm.id === commodity.payload.id && cm.size === commodity.payload.size).count += 1;
      }
      state.count+=1;
      state.sum += commodity.payload.price;
    },

    removeFromCart: (state, commodity) =>{
      const toDelete = state.cartArray[commodity.payload];
      state.count -= toDelete.count;
      state.sum -= toDelete.count * toDelete.price;
      state.cartArray.splice(commodity.payload, 1);
     

    },

    increment: (state, rowNum) => {
      state.cartArray[rowNum.payload].count += 1;
      state.count += 1;
      state.sum += state.cartArray[rowNum.payload].price;
    },

    decrement: (state, rowNum) => {
      state.cartArray[rowNum.payload].count -= 1;
      state.count -= 1;
      state.sum -= state.cartArray[rowNum.payload].price;
    },
    
  }
})

export const { addToCart,removeFromCart, increment, decrement} = cartSlice.actions

export default cartSlice.reducer