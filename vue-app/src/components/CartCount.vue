<template>
  <div>
    <div class="float-right">
      <span v-if="itemCount > 0">
        <p id="item-count">{{ itemCount }}</p>
        <router-link :to="{ name: 'Cart' }"
          ><i class="fa-solid fa-bag-shopping bag"></i
        ></router-link>
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
  color: rgb(214, 212, 202);
  position: relative;
}
#item-count {
  margin-bottom: 5%;
  margin-left: 60%;
  background: rgb(157, 155, 155, 0.6);
  border-radius: 2px;
  width: 25%;
}

.bag {
  font-size: 20px;
  color: rgb(164, 157, 134);
  cursor: pointer;
}

.bag:hover {
  color: rgb(227, 224, 216);
}
#price {
  margin-top: 5%;
}
</style>
