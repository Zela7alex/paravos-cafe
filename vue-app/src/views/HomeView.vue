<template>
  <div>
    <body>
      <CarouselHome />
      <MenuFeatures />
      <MarketingFeatures />
      <FooterHome />
    </body>
  </div>
</template>
<script>
import CarouselHome from '../components/CarouselHome'
import MenuFeatures from '../components/MenuFeatures'
import MarketingFeatures from '../components/MarketingFeatures'
import FooterHome from '../components/FooterHome'

export default {
  components: {
    CarouselHome,
    MenuFeatures,
    MarketingFeatures,
    FooterHome,
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
