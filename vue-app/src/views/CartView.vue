<template>
  <div class="row mt-3">
    <BannerMarketing class="banner" />
    <CategoriesList class="col" />
    <div class="col-9">
      <h2 class="display-4">Your Cart</h2>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>Product</th>
            <th>Toppings</th>
            <th>Quantity</th>
            <th>Comments</th>
            <th>Actions</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          <tr v-if="itemCount == 0">
            <td colspan="5" class="text-center">Your cart is empty</td>
          </tr>
          <tr v-else v-for="(c, i) in cart" :key="i">
            <td>{{ c.product.name }}</td>
            <td>
              <p v-for="(t, i) in c.product.toppings" :key="i">{{ t }}</p>
            </td>
            <td>{{ c.quantity }}</td>
            <td>{{ c.product.comments }}</td>
            <td>
              <button
                class="btn small btn-primary action-btn"
                @click="handleAddProduct(c.product)"
              >
                +
              </button>
              <button
                class="btn small btn-primary mx-1 action-btn"
                @click="handleSubtractProduct(c.product.id)"
              >
                -
              </button>
              <button
                class="btn small btn-primary mx-1 action-btn clear-btn"
                @click="handleRemoveProduct(c.product.id)"
              >
                remove
              </button>
            </td>
            <td>{{ c.product.price | currency }}</td>
            <td>{{ (c.product.price * c.quantity) | currency }}</td>
          </tr>
        </tbody>
        <tfoot v-if="itemCount > 0">
          <tr>
            <td colspan="5" class="text-right">
              <h4>Total: {{ totalPrice | currency }}</h4>
            </td>
          </tr>
          <tr>
            <td colspan="5">
              <button
                class="btn btn-primary float-left clear-btn"
                @click="handleClearCart"
              >
                Clear Cart
              </button>
              <router-link
                to="/checkout"
                class="btn btn-primary float-right checkout-btn"
                >Checkout</router-link
              >
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from 'vuex'
import CategoriesList from '../components/CategoriesList'
import BannerMarketing from '../components/BannerMarketing'
export default {
  components: { CategoriesList, BannerMarketing },
  computed: {
    ...mapState({ cart: (state) => state.cart.cart }),
    ...mapGetters({
      // Bringing in the count for amount of items in cart
      itemCount: 'cart/itemCount',
      totalPrice: 'cart/totalPrice',
    }),
    ...mapActions({
      clearCartData: 'cart/clearCartData',
    }),
  },
  methods: {
    ...mapMutations({
      addProduct: 'cart/addProduct',
      subtractProduct: 'cart/subtractProduct',
      removeProduct: 'cart/removeProduct',
    }),
    handleAddProduct(product) {
      this.addProduct(product)
    },
    handleSubtractProduct(productById) {
      this.subtractProduct(productById)
    },
    handleRemoveProduct(productById) {
      this.removeProduct(productById)
    },
    handleClearCart() {
      this.clearCartData()
    },
  },
}
</script>
<style scoped>
.row {
  margin: 0 auto;
  width: 100%;
  min-height: 100vh;
  margin-top: 10rem;
  margin-bottom: 2rem;
}
.col {
  width: 20%;
}
.col-9 {
  width: 80%;
  height: 100%;
  margin-top: 20vh;
  margin-left: 5%;
  display: flex;
  flex-direction: column;
}
.banner {
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 88px;
}
.col-toppings {
  display: flex;
  flex-direction: column;
}
.checkout-btn {
  background-color: rgb(135, 179, 114);
  border: 1.4px solid rgba(46, 93, 37, 0.9);
  margin-left: 1rem;
}
.clear-btn {
  background-color: rgb(183, 190, 180);
  border: 1.4px solid rgba(46, 93, 37, 0.9);
}
.action-btn {
  background: var(--light-green);
}

.btn:hover {
  background-color: rgb(155, 171, 154);
  outline: none;
}
.btn:focus {
  outline: none;
}
.clear-btn:hover {
  background: rgb(140, 78, 78);
}
</style>
