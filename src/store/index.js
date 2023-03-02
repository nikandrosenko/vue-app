import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    products: [],
    cart: [],
    totalCost: 0,
  },
  getters: {
    PRODUCTS(state) {
      return state.products;
    },
    CART(state) {
      return state.cart;
    },
    CART_QUANTITY(state) {
      return state.cart.reduce((sumQuantity, product) => {
        return sumQuantity + product.quantity;
      }, 0);
    },
    TOTAL_COST(state) {
      return state.totalCost;
    },
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products;
    },
    SET_CART: (state, product) => {
      if (product.quantity === 0) {
        state.cart.push(product);
        product.quantity++;
        state.totalCost += product.price;
      } else {
        product.quantity++;
        state.totalCost += product.price;
      }
    },
    REMOVE_FROM_CART: (state, index) => {
      state.totalCost -= state.cart[index].price * state.cart[index].quantity;
      state.cart[index].quantity = 0;
      state.cart.splice(index, 1);
    },
    INCREASE_PRODUCT_IN_CART: (state, index) => {
      state.cart[index].quantity++;
      state.totalCost += state.cart[index].price;
    },
    DECREASE_PRODUCT_IN_CART: (state, index) => {
      if (state.cart[index].quantity == 1) {
        state.cart[index].quantity = 0;
        state.totalCost -= state.cart[index].price;
        state.cart.splice(index, 1);
      } else {
        state.cart[index].quantity--;
        state.totalCost -= state.cart[index].price;
      }
    },
  },
  actions: {
    GET_PRODUCTS_FROM_API({ commit }) {
      return axios("http://localhost:3000/products", {
        method: "GET",
      })
        .then((products) => {
          console.log("Get product from API success");
          commit("SET_PRODUCTS_TO_STATE", products.data);
          return products;
        })
        .catch((error) => {
          console.log("Get product from API error: ", error);
          alert(error.message);
          return error;
        });
    },
    ADD_TO_CART({ commit }, product) {
      commit("SET_CART", product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit("REMOVE_FROM_CART", index);
    },
    INCREASE_PRODUCT({ commit }, index) {
      commit("INCREASE_PRODUCT_IN_CART", index);
    },
    DECREASE_PRODUCT({ commit }, index) {
      commit("DECREASE_PRODUCT_IN_CART", index);
    },
  },
  modules: {},
});
