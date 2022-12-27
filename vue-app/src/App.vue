<template>
  <div>
    <HeaderHome />
    <router-view />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import HeaderHome from '@/components/HeaderHome.vue'
export default {
  components: {
    HeaderHome,
  },
  methods: {
    ...mapActions(['setCategoriesAction', 'setAllProductsAction']),
  },
  created() {
    this.setCategoriesAction()
    this.setAllProductsAction()
  },
}
</script>

<style global>
:root {
  --light-brown: rgb(119, 110, 83);
  --dark-green: rgb(67, 83, 59);
  --light-green: rgb(7, 111, 7);
}
body {
  margin: 0;
  background: rgb(245, 244, 241);
}
</style>
