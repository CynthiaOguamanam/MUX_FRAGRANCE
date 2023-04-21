import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    myuser: null,
    product: [],
    cart: [],
    Id: "",
};

const gstate = createSlice({
  name: "e-comm",
  initialState,
  reducers: {
      createUser: (state, {payload}) =>{
        state.myuser = payload
      },
      createProduct: (state, {payload}) =>{
          state.product = {payload}
          // state.product = [...payload]
      },
      getProduct:(state, {payload}) =>{
        state.product = payload
        // state.product = [...payload]
      },
      addToCart:(state, {payload}) =>{
        const checkCart = state.cart.findIndex((el) => el._id === payload._id);
        if(checkCart >= 0){
          state.cart[checkCart].QTY += 1;
        }else{
          const items = {...payload, QTY :1}
          state.cart.push(items);
        }
      },
      changeProduct: (state, {payload}) => {
        const checkCart = state.cart.findIndex((el) => el._id === payload._id)
        const check = state.cart[checkCart].QTY
        if(check > 1){
          state.cart[checkCart].QTY -= 1
        }else if(check === 1){
          const remove = state.cart.filter((el) => el._id !== payload._id);
        state.cart = remove;
        }
      },

      removeCart: (state, {payload}) =>{
        const remove = state.cart.filter(el => el._id !== payload._id);
        state.cart = remove;
      },
      clearCart: (state, {payload}) =>{
        state.cart = []
      },
      Total: (state, {payload}) =>{
        // const {totalCost, totalItems} = state.cart.reduce((cost, items) => {
        //   const {price, QTY} = items;

        //   const mainCost = price * QTY;

        //   cost.totalItems += QTY;
        //   cost.totalCost += mainCost;

        //   return cost;
        // }, 
        // {
        //   totalCost: 0,
        //   totalItems: 0,
        // }
        // )
        // state.myTotalQty = totalItems;
        // state.myTotalCost = totalCost;
      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.QTY;
        total += item.QTY * item.price;
      });
      state.amount = amount;
      state.total = total;
      },
      logout:(state, {payload}) =>{
        state.Id = "";
        // state.myuser = null;
        state.cart = [];
      },
  }
});

export const {createUser, verifyAdmin, createProduct, getProduct, addToCart, removeCart, clearCart, Total, changeProduct, logout} = gstate.actions;

export default gstate.reducer;