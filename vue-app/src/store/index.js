import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const homeUrl = 'http://localhost:3000'
const pagesUrl = `${homeUrl}/pages`

export default new Vuex.Store({
  strict: true,
  state: {
    pages: [],
  },
  getters: {},
  mutations: {
    setPages(state, pages) {
      state.pages = pages
    },
  },
  actions: {
    // When action invoked, Pages will be grabbed from pagesUrl and added to state through axios
    async setPagesAction(context) {
      context.commit('setPages', (await Axios.get(pagesUrl)).data)
    },
  },
  modules: {},
})
