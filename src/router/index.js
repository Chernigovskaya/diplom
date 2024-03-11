import { createRouter, createWebHistory } from "vue-router";
import BakeryComponent from "@/views/BakeryComponent";
import HomePage from "@/views/HomePage";
import CartComponent from "@/views/CartComponent";
import ProductComponent from "@/views/ProductComponent";
import SaladComponent from "@/views/SaladComponent";
import SoupComponent from "@/views/SoupComponent";
import VtoroeComponent from "@/views/VtoroeComponent";
import GarnishComponent from "@/views/GarnishComponent";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/bakery",
    name: "bakery",
    component: BakeryComponent,
  },
  {
    path: "/cart",
    name: "cart",
    component: CartComponent,
  },
  {
    path: "/garnish",
    name: "garnish",
    component: GarnishComponent,
  },

  {
    path: "/product",
    name: "product",
    component: ProductComponent,
  },
  {
    path: "/salad",
    name: "salad",
    component: SaladComponent,
  },
  {
    path: "/soup",
    name: "soup",
    component: SoupComponent,
  },
  {
    path: "/vtoroe",
    name: "vtoroe",
    component: VtoroeComponent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
