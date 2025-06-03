import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartitems: [],
};

const cartSlice = createSlice({
  name: "cart",
    initialState,
    reducers: {
        addItemToCart: (state, action) => {
            const existingItem = state.cartitems.find((item) => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cartitems.push({ ...action.payload, quantity: 1 });
            }
        },
        removeItemFromCart: (state, action) => {
            const index = state.cartitems.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
            state.cartitems.splice(index, 1);
            }
        },
        clearCart: (state) => {
            state.cartitems = [];
        },
        increaseItemQuantity: (state, action) => {
            const itemToIncrease = state.cartitems.find((item) => item.id === action.payload.id);
            if (itemToIncrease) {
                itemToIncrease.quantity += 1;
            }       
        }, 
        decreaseItemQuantity: (state, action) => {
            const itemToDecrease = state.cartitems.find((item) => item.id === action.payload.id);
            if (itemToDecrease && itemToDecrease.quantity > 1) {
                itemToDecrease.quantity -= 1;
            } else if (itemToDecrease && itemToDecrease.quantity === 1) {
                state.cartitems = state.cartitems.filter((item) => item.id !== action.payload.id);
            }
        },
    },
})

export const { addItemToCart, removeItemFromCart, clearCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;
export default cartSlice.reducer;

