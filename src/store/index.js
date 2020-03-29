import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        registered:false,
        passwordRecoveryDialog:false,
        userToRegister:{},
        selectedCategory:"",
        registredProducts:[],
        showPurchaseProductModal:false,
        productToPurchase:{},
        
        cart:[],
        loged:false,
        showProductDetailsModal: false,
    }
})