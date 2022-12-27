import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'http://localhost:3000'
const categoriesUrl = `${baseUrl}/categories`
const productsUrl = `${baseUrl}/products`

export default new Vuex.Store({
  strict: true,
  state: {
    categories: [],
    products: [],
    allPoducts: [],
  },
  getters: {},
  mutations: {
    setCategories(state, categories) {
      state.categories = categories
    },
    setProducts(state, products) {
      state.products = products
    },
    setAllProducts(state, allProducts) {
      state.allProducts = allProducts
    },
  },
  actions: {
    // When action invoked, categories  will be grabbed from categoriesUrl and added to state through axios
    async setCategoriesAction(context) {
      context.commit('setCategories', (await Axios.get(categoriesUrl)).data)
    },
    //Retrieving products from api based on it's category
    async setProductsByCatAction(context, category) {
      let url
      // Grabbing products by their specified category
      if (category != 'all') {
        url = `${productsUrl}/${category}`
      } else {
        // Grabbing all products despite category
        url = `${productsUrl}`
      }
      context.commit('setProducts', (await Axios.get(url)).data)
    },
    // Action to retrieve only "all products"
    async setAllProductsAction(context) {
      context.commit('setAllProducts', (await Axios.get(productsUrl)).data)
    },
  },
  modules: {},
})
