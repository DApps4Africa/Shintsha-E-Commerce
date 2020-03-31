import Vue from 'vue'
import Router from 'vue-router'

import DeliveryServiceView from '../views/DeliveryServiceView';
import ProfileView from '../views/ProfileView';
import LoginView from '../views/LoginView';
import MarketPlaceView from '../views/MarketPlaceView';
import ProductView from '../views/ProductView';

import CategoryCardView from '../components/product_components/CategoryCardView';
import ProductCardView from '../components/product_components/ProductCardView';
import FarmerProductView from '../components/product_components/FarmerProductView';
import FarmerCustomerOrder from '../components/product_components/FarmerCustomerOrder';
import AddProduct from '../components/product_components/AddProduct';
import DashboardView from '../components/DashboardView';

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            redirect: "loginview"
        },
        {
            path: "/profileview",
            props: true,
            name: "profileview",
            component: ProfileView
        },
        {
            path: "/loginview",
            name: "loginview",
            component: LoginView
        },
        {
            path: "/marketplaceview",
            name: "marketplaceview",
            component: MarketPlaceView
        },
        {
            path: "/productview",
            name: "productview",
            component: ProductView
        },
        {
            path: "/deliveryserviceview",
            name: "deliveryserviceview",
            component: DeliveryServiceView
        },
        {
            path: "/dashboardview",
            name: "dashboard",
            component: DashboardView
        },
        {
            path: "/categorycardview",
            name: "categorycardview",
            component: CategoryCardView
        },
        {
            path: "/productcardview",
            name: "productcardview",
            props: true,
            component: ProductCardView
        },
        {
            path: "/farmerproductview",
            name: "farmerproductview",
            component: FarmerProductView
        },
        {
            path: "/farmercustomerorder",
            name: "farmercustomerorder",
            component: FarmerCustomerOrder,
        },
        {
            path: "/addproduct",
            name: "addproduct",
            component: AddProduct
        }
    ],
    mode: "history"
})