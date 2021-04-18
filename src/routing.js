import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import Homepage from "./pages/Homepage";
import ContactUs from "./pages/ContactUs";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: App,
    children: [
      {
        path: "/",
        component: Homepage,
        meta: {
          pageTitle: "Sample"
        }
      },
      {
        name: "contact",
        path: "contact",
        component: ContactUs
      }
    ]
  }
];

export const router = new VueRouter({
  routes
});
