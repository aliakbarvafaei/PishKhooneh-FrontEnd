import DefaultLayout from "../layouts/Default";
// import Cart from "../pages/Cart";
import Home from "../pages/Home";
import LoginPage from "../pages/Login";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
// import NotFound from "../pages/NotFound";
// import ProductDetail from "../pages/ProductDetail";
// import Profile from "../pages/Profile";
import RegisterPage from "../pages/Register";
// import SearchPage from "../pages/SearchPage";
// import bookmark from "../pages/bookmark";

const indexRoutes = [{ path: "/", component: DefaultLayout }];

const AppRoutes:Array<any> = [
  {
    path: ["/home", "/"],
    name: "داشبورد",
    icon: "fa fa-tachometer-alt",
    component: Home,
    showInNav: true,
    private: false,
  },
  // {
  //   path: "/product-details/:idProduct",
  //   name: "همه محصولات",
  //   icon: "fa fa-list",
  //   component: ProductDetail,
  //   showInNav: false,
  //   private: false,
  // },
  // {
  //   path: "/search",
  //   name: "search",
  //   icon: "fa fa-list",
  //   component: SearchPage,
  //   showInNav: false,
  //   private: false,
  // },
  // {
  //   path: "/bookmark",
  //   name: "bookmark",
  //   icon: "fa fa-list",
  //   component: Bookmark,
  //   showInNav: false,
  //   private: true,
  // },
  // {
  //   path: "/cart",
  //   name: "cart",
  //   icon: "fa fa-list",
  //   component: Cart,
  //   showInNav: false,
  //   private: true,
  // },
  {
    path: "/profile",
    name: "profile",
    icon: "fa fa-list",
    component: Profile,
    showInNav: false,
    private: true,
  },

  {
    path: "/login",
    name: "ورود",
    icon: "fa fa-plus",
    component: LoginPage,
    showInNav: false,
  },
  {
    path: "/register",
    name: "ثبت نام",
    icon: "fa fa-plus",
    component: RegisterPage,
    showInNav: false,
  },
  {
    path: ["*", "/not-found"],
    name: "not found",
    icon: "fa fa-tachometer-alt",
    component: NotFound,
    showInNav: true,
    private: false,
  },
  // { path: '/', pathTo: '/home', name: 'Dashboard', redirect: true },
];

export default AppRoutes;

export { indexRoutes };
