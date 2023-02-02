<template>
  <div class="column">
    <BannerMarketing class="banner" />
    <div class="product-summary">
      <div class="container">
        <div class="title-quote">
          <h2>Cart Summary</h2>
          <p>It's our pleasure to serve you!</p>
        </div>
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
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
              <td>{{ c.quantity }}</td>
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
          </tfoot>
        </table>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="form-group m-2">
          <label for="">Name</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group m-2">
          <label for="">Email</label>
          <input type="text" class="form-control" />
        </div>
        <div class="form-group m-2">
          <label for="">Phone Number</label>
          <input type="text" class="form-control" />
        </div>
        <CalendarCheckout />
      </div>
      <div class="col-12 text-center">
        <router-link class="btn btn-secondary m-1" to="/cart">Back</router-link>
        <button class="btn btn-primary m1 checkout-btn">Place Order</button>
      </div>
    </div>
  </div>
</template>

<script>
import CalendarCheckout from './CalendarCheckout.vue'
import BannerMarketing from '../components/BannerMarketing'
import { mapState, mapGetters } from 'vuex'
export default {
  components: { CalendarCheckout, BannerMarketing },
  methods: {},
  computed: {
    ...mapState({ cart: (state) => state.cart.cart }),
    ...mapGetters({
      // Bringing in the count for amount of items in cart
      itemCount: 'cart/itemCount',
      totalPrice: 'cart/totalPrice',
    }),
  },
}
</script>
<style scoped>
.column {
  display: flex;
}
.row {
  width: 40%;
  min-height: 100vh;
  margin-top: 12rem;
  margin-bottom: 2rem;
  margin-left: 5rem;
}
.banner {
  width: 100%;
  position: fixed;
  z-index: 2;
  top: 88px;
}
.product-summary {
  width: 40%;
  height: 100%;
  margin-top: 12rem;
  margin-left: 2rem;
  border: 2px solid rgba(171, 170, 165, 0.5);
  border-radius: 5px;
  position: relative;
}
.title-quote {
  color: var(--dark-green);
  text-align: center;
  margin-top: 5%;
}
h4 {
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
}
.checkout-btn {
  background-color: rgb(135, 179, 114);
  border: 1.4px solid rgba(46, 93, 37, 0.9);
  margin-left: 1rem;
}
.btn:hover {
  background-color: rgb(155, 171, 154);
}
</style>
