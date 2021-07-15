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
      // var check = state.cartArray.filter(cm => (cm.id === commodity.payload.id) && (cm.size === commodity.payload.size));

      if(!state.cartArray.some(cm => cm.id === commodity.payload.id && cm.size === commodity.payload.size)){
        state.cartArray.push(commodity.payload);
      }else{
        state.cartArray.find(cm => cm.id === commodity.payload.id && cm.size === commodity.payload.size).count += 1;
      }
      state.count+=1;
      state.sum += commodity.payload.price;
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
    }
    
  }
})

export const { addToCart, increment, decrement } = cartSlice.actions

export default cartSlice.reducer