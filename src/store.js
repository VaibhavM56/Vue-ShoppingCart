import { createStore } from "vuex";

let store = createStore({
  state() {
    return {
      products: [
        {
          id: 1,
          shoeName: "Nike Shoe 1",
          imageUrl:
            "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",
          price: 3000,
          quantity: 1,
        },
        {
          id: 2,
          shoeName: "Nike Shoe 2",
          imageUrl:
            "https://images.unsplash.com/photo-1595461135849-bf08893fdc2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1168&q=80",
          price: 4000,
          quantity: 1,
        },
        {
          id: 3,
          shoeName: "Nike Shoe 3",
          imageUrl:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
          price: 5000,
          quantity: 1,
        },
      ],
      cartItems: [],
      isAuthenticated: false,
      totalPrice: 0,
    };
  },
  mutations: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },

    getProducts(state, payload) {
      // let itemInCart = state.cartItems.filter((item) => item.id === payload.id);
      // let isItemInCart = itemInCart.length > 0;

      // if (isItemInCart === false) {
      //   state.cartItems.push(payload);
      // } else {
      //   itemInCart[0].qty += payload.qty;
      // }
      let item = state.cartItems.find((i) => i.id === payload.id);

      if (item) {
        item.quantity++;
      } else {
        state.cartItems.push({ ...payload, quantity: 1 });
      }
    },

    deleteProduct(state, payload) {
      let tempProduct = state.cartItems;
      let productid = payload.id;

      console.log(productid);
      console.log(tempProduct);
      tempProduct = tempProduct.filter((item) => {
        return item.id != productid;
      });
      state.cartItems = tempProduct;
    },
  },
  getters: {
    // totalPrice(state) {
    //   state.cartItems.forEach((item) => {
    //     state.totalPrice += item.price * item.quantity;
    //     console.log(state.totalPrice, "total");
    //   });
    //   return state.totalPrice;
    // },
    totalPrice: (state) => {
      return state.cartItems.reduce((a, b) => a + b.price * b.quantity, 0);
    },
  },
  actions: {
    getProducts(context, product) {
      context.commit("getProducts", product);
      console.log(product);
    },
    deleteProduct(context, product) {
      context.commit("deleteProduct", product);
      console.log(product);
    },
  },
});

export default store;
