<template>
  <div>
    <div class="float-right">
      <span v-if="itemCount > 0">
        <p>{{ itemCount }}</p>
        <p id="price">{{ totalPrice | currency }}</p>
      </span>
      <span v-else>0</span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      // Bringing in the count for amount of items in cart
      itemCount: 'cart/itemCount',
      totalPrice: 'cart/totalPrice',
    }),
  },
}
</script>

<style scoped>
.float-right {
  width: 100%;
  color: rgb(214, 212, 202);
  position: relative;
}
#price {
  position: fixed;
  right: 2.5rem;
  top: 4rem;
}
</style>
