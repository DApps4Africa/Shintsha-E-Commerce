import Vue from 'vue'
import Router from 'vue-router'
import DeliveryServiceView from '../components/DeliveryServiceView';
import ProfileView from '../components/ProfileView';
import MarketPlaceView from '../components/MarketPlaceView';
import RegisterProductView from '../components/RegisterProductView';
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
            path: "/registerproductview",
            name: "registerproductview",
            component: RegisterProductView
        },
        {
            path: "/deliveryserviceview",
            name: "deliveryserviceview",
            component: DeliveryServiceView
        }
    ],
    mode: "history"
})