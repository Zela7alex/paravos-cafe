import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import CartModule from './cart'
import OrdersModule from './orders'

Vue.use(Vuex)

// const baseUrl = 'http://localhost:3000' //From Node.js API
const categoriesUrl = `/categories`
const productsUrl = `/products`
const contactUrl = `/`

export default new Vuex.Store({
  strict: true,

  modules: {
    cart: CartModule,
    orders: OrdersModule,
  },

  state: {
    categories: [],
    products: [],
    allPoducts: [],
    inquiries: [],
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
    //^ When action invoked, categories  will be grabbed from categoriesUrl and added to state through axios
    async setCategoriesAction(context) {
      context.commit('setCategories', (await Axios.get(categoriesUrl)).data)
    },
    //^ Retrieving products from api based on it's category
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
    //^ Action to retrieve only "all products"
    async setAllProductsAction(context) {
      context.commit('setAllProducts', (await Axios.get(productsUrl)).data)
    },

    //^ Post catering inquiry
    async createNewInquiryAction(context, payload) {
      let data = payload

      // const res = await Axios.post(contactUrl, data)

      // res.status == 200 ? console.log('success') : console.log('error')
      return await Axios.post(contactUrl, data)
    },
  },
})
