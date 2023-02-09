export default {
  namespaced: true,

  state: {
    cart: [],
  },
  getters: {
    itemCount: (state) =>
      state.cart.reduce((total, cartItem) => total + cartItem.quantity, 0),

    totalPrice: (state) =>
      state.cart.reduce(
        (total, cartItem) => total + cartItem.quantity * cartItem.product.price,
        0
      ),
  },
  mutations: {
    //^ Adding products to cart
    addProduct(state, product) {
      const cartItem = state.cart.find(
        (cartItem) => cartItem.product.id == product.id
      )
      if (cartItem != null) {
        cartItem.quantity++
      } else {
        state.cart.push({ product: product, quantity: 1 })
      }
    },

    //^ Subtracting products from cart
    subtractProduct(state, productById) {
      const cartItem = state.cart.find(
        (cartItem) => cartItem.product.id == productById
      )
      // if cart item is equal to 1, removing item
      if (cartItem.quantity == 1) {
        //finding the product selected from cart
        const index = state.cart.findIndex(
          (cartItem) => cartItem.product.id == productById
        )
        if (index != -1) {
          state.cart.splice(index, 1)
        }
      } else {
        cartItem.quantity--
      }
    },

    //^ Removing products from cart
    removeProduct(state, productById) {
      //finding the product selected from cart
      const index = state.cart.findIndex(
        (cartItem) => cartItem.product.id == productById
      )
      // Product will be removed as long as there is a product starting at index 1
      if (index != -1) {
        state.cart.splice(index, 1)
      }
    },
    //LocalStorage data being loaded
    setCartData(state, data) {
      state.cart = data
    },
  },
  actions: {
    //^ Retrieving cart data from localStorage
    loadCartData(context) {
      const data = localStorage.getItem('cart')
      if (data != null) {
        context.commit('setCartData', JSON.parse(data))
      }
    },
    //^ Storing loaded data into cart
    storeCartData(context) {
      localStorage.setItem('cart', JSON.stringify(context.state.cart))
    },
    //^ Getting cart content when application starts
    initializeCart(context, store) {
      context.dispatch('loadCartData')
      store.watch(
        (state) => state.cart.cart,
        () => context.dispatch('storeCartData'),
        { deep: true }
      )
    },
    //^ Clearing cart data
    clearCartData(context) {
      context.commit('setCartData', [])
    },
  },
}
