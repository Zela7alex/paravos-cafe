<template>
  <div>
    <HeaderHome />
    <router-view />
  </div>
</template>
<script>
import HeaderHome from '@/components/HeaderHome.vue'
export default {
  components: {
    HeaderHome,
  },
}
</script>

<style>
body {
  margin: 0;
}
</style>
