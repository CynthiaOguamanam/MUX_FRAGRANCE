import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product:[],
  cart:[],
  Id:"",
  user: null,
  
};

const Global = createSlice({
  name: "redux",
  initialState,
  reducers: {
    login: (state, { payload }) => {
      state.user = payload;
    },

    addProduct: (state, {payload}) =>{
      state.user = payload;
    },

    addToCart:(state, {payload}) =>{
      const checkCart = state.cart.findIndex((el) => el._id === payload._id);
      const check = state.cart[checkCart].QTY

      if(check >= 0){
        state.cart[checkCart].QTY += 1;
      }else{
        const items = { ...payload, QTY: 1};
        state.cart.push(items);
      }
    },

    removeCart: (state, {payload}) =>{
      const remove = state.cart.filter(el => el._id !== payload._id)
      state.cart = remove
    },

    clearCart: (state, {payload}) =>{
      state.cart = []
    },

    changeItem: (state, {payload}) =>{
      const checkCart = state.cart.findIndex((el) => el._id === payload._id);
      const check = state.cart[checkCart].QTY

      if(check > 1){
        state.cart[checkCart].QTY -= 1
      }else if(check === 1){
        const remove = state.cart.filter(el => el._id !== payload._id);
        state.cart = remove
      }
    },

    Total:(state, {payload}) =>{

      let amount = 0;
      let total = 0;
      state.cart.forEach((item) => {
        amount += item.QTY;
        total += item.QTY * item.Price;
      });
      state.amount = amount;
      state.total = total;
    },

    addId:(state, {payload}) =>{
      state.Id = payload
    },

    removeId:(state, {payload}) =>{
      state.Id = ""
    },

    changeId: (state, {payload}) =>{
      state.Id.Admin = true
    },
    
    logout: (state) => {
      state.Id = "";
      state.cart = [];
      state.user = null
    },
  },
});

export const { login, logout, addId, changeId, removeId, changeItem,Total, clearCart, removeCart, addToCart, addProduct} = Global.actions;

export default Global.reducer;




