<template>
  <div>
    <body>
      <CarouselHome />
      <MenuFeatures />
      <MarketingFeatures />
    </body>
  </div>
</template>
<script>
import CarouselHome from '../components/CarouselHome'
import MenuFeatures from '../components/MenuFeatures'
import MarketingFeatures from '../components/MarketingFeatures'

export default {
  components: {
    CarouselHome,
    MenuFeatures,
    MarketingFeatures,
  },
}
</script>

<style scoped>
body {
  padding-top: 1rem;
  padding-bottom: 3rem;
  color: #5a5a5a;
}
</style>
