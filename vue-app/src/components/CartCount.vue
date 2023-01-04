<template>
  <div>
    <div class="float-right">
      <span v-if="itemCount > 0">
        {{ itemCount }} item(s) {{ totalPrice | currency }}
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
  color: rgb(214, 212, 202);
}
</style>
