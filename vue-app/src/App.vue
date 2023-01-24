<template>
  <div>
    <HeaderHome />
    <router-view />
    <FooterHome />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import HeaderHome from '@/components/HeaderHome.vue'
import FooterHome from '@/components/FooterHome.vue'
export default {
  components: {
    HeaderHome,
    FooterHome,
  },
  methods: {
    ...mapActions(['setCategoriesAction', 'setAllProductsAction']),
    ...mapActions({ initializeCart: 'cart/initializeCart' }),
  },
  created() {
    this.setCategoriesAction()
    this.setAllProductsAction()
    this.initializeCart(this.$store)
  },
}
</script>

<style global>
:root {
  --light-brown: rgb(119, 110, 83);
  --dark-green: rgb(67, 83, 59);
  --light-green: rgb(7, 111, 7);
  --background: rgb(245, 244, 241);
}
body {
  box-sizing: none;
  margin: 0;
  background: var(--background);
}
</style>
