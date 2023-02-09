<template>
  <div id="paravos">
    <HeaderHome id="header" />
    <router-view />
    <CookieConsent
      @hideCookie="hideCookieBanner()"
      :class="{ displayNone: hide }"
    />
    <FooterHome />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import HeaderHome from '@/components/HeaderHome.vue'
import FooterHome from '@/components/FooterHome.vue'
import CookieConsent from '@/components/CookieConsent.vue'
export default {
  components: {
    HeaderHome,
    FooterHome,
    CookieConsent,
  },
  data() {
    return {
      hide: false,
    }
  },
  methods: {
    ...mapActions(['setCategoriesAction', 'setAllProductsAction']),
    ...mapActions({ initializeCart: 'cart/initializeCart' }),
    hideCookieBanner() {
      this.hide = true
    },
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
  box-sizing: border-box;
  margin: 0;
  background: var(--background);
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
}
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.displayNone {
  display: none;
}
</style>
