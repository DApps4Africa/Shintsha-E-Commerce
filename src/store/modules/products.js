import product from '../../data-stubs/products';

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// actions
const actions = {
  getAllProducts ({ commit }) {
    product.getProducts(products => {
      commit('setProducts', products)
    })
  }
}

// mutations
const mutations = {
  setProducts (state, products) {
    state.all = products
  },

  decrementProductInventory (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}