import Vue from 'vue'
import Router from 'vue-router'

import DeliveryServiceView from '../views/DeliveryServiceView';
import ProfileView from '../views/ProfileView';
import MarketPlaceView from '../views/MarketPlaceView';
import ProductView from '../views/ProductView';

import CategoryCardView from '../components/product_components/CategoryCardView';
import ProductCardView from '../components/product_components/ProductCardView';
import FarmerProductView from '../components/product_components/FarmerProductView';
import DashboardView from '../components/DashboardView';
import AddProduct from '../components/product_components/AddProduct';

Vue.use(Router)

export default new Router({
    routes: [{
            path: "/",
            redirect: "profileview"
        },
        {
            path: "/profileview",
            name: "profileview",
            component: ProfileView
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
            path: "/addproduct",
            name: "addproduct",
            component: AddProduct
        }
    ],
    mode: "history"
})