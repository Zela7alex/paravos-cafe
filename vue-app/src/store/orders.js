import Axios from 'axios'
const ordersUrl = 'http://localhost:3000/orders'

export default {
  namespaced: true,

  state: {
    orders: [],
  },

  actions: {
    async storeOrderAction(context, order) {
      return (await Axios.post(ordersUrl, order)).data.id
    },
  },
}