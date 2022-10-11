import { createRouter, createWebHistory } from "vue-router";
import HomeComp from "./components/HomeComp";
import LoginComp from "./components/LoginComp";
import ProductComp from "./components/ProductComp";
import CartComp from "./components/CartComp";
import store from "./store";

let router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomeComp,
    },
    {
      path: "/login",
      component: LoginComp,
    },
    {
      path: "/products",
      component: ProductComp,
    },
    {
      path: "/cart",
      component: CartComp,
    },
  ],
});

router.beforeEach((to, from) => {
  console.log("to", to);
  console.log("from", from);

  //return true

  if (to.path === "/cart" && store.state.isAuthenticated) {
    return true;
  } else if (to.path === "/cart" && !store.state.isAuthenticated) {
    return "/login";
  } else if (to.path === "/products" && store.state.isAuthenticated) {
    return true;
  } else if (to.path === "/products" && !store.state.isAuthenticated) {
    return "/login";
  }
});

export default router;
