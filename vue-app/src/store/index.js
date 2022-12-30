import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const baseUrl = 'http://localhost:3000' //From Node.js API
const categoriesUrl = `${baseUrl}/categories`
const productsUrl = `${baseUrl}/products`

export default new Vuex.Store({
  strict: true,
  state: {
    categories: [],
    products: [],
    allPoducts: [],
    currentPage: 1,
    pageCount: 0,
    pageSize: 4,
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
    setPageCount(state, productCount) {
      state.pageCount = Math.ceil(Number(productCount) / state.pageSize)
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
      let productCountUrl
      // Grabbing products by their specified category
      if (category != 'all') {
        url = `${productsUrl}/${category}`
        productCountUrl = `${productsUrl}/count/${category}`
      } else {
        // Grabbing all products despite category
        url = `${productsUrl}`
        productCountUrl = `${productsUrl}/count/all`
      }

      const productCount = (await Axios.get(productCountUrl)).data

      context.commit('setPageCount', productCount)
      context.commit('setProducts', (await Axios.get(url)).data)
    },
    // Action to retrieve only "all products"
    async setAllProductsAction(context) {
      context.commit('setAllProducts', (await Axios.get(productsUrl)).data)
    },
  },
  modules: {},
})
